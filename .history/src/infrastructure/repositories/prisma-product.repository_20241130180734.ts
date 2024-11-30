import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { ProductRepository } from '../../domain/repositories/product.repository';
import { Product } from '@prisma/client';
import { CreateProductDto } from '../../application/dto/request/create-product.dto';
import { UpdateProductDto } from '../../application/dto/request/update-product.dto';

@Injectable()
export class PrismaProductRepository implements ProductRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(): Promise<Product[]> {
    return this.prisma.product.findMany();
  }

  async findById(id: number): Promise<Product> {
    const product = await this.prisma.product.findUnique({ where: { id: Number(id) } });
    if (!product) {
      throw new NotFoundException(`Product with ID ${id} not found`);
    }
    return product;
  }

  async create(data: CreateProductDto): Promise<Product> {
    return this.prisma.product.create({
      data: {
        ...data,
        price: Number(data.price),
        stock: 0
      }
    });
  }

  async update(id: number, data: UpdateProductDto): Promise<Product> {
    try {
      return await this.prisma.product.update({
        where: { id: Number(id) },
        data: {
          ...data,
          price: data.price ? Number(data.price) : undefined
        }
      });
    } catch (error) {
      throw new NotFoundException(`Product with ID ${id} not found`);
    }
  }

  async delete(id: number): Promise<void> {
    try {
      await this.prisma.product.delete({ where: { id: Number(id) } });
    } catch (error) {
      throw new NotFoundException(`Product with ID ${id} not found`);
    }
  }
}
