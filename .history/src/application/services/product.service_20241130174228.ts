import { Injectable } from '@nestjs/common';
import { ProductRepository } from 'src/domain/repositories/product.repository';
import { CreateProductDto } from '../dto/CreateProductDto';
import { UpdateProductDto } from '../dto/update-product.dto';
import { Product } from 'src/domain/entities/product.entity';

@Injectable()
export class ProductService {
  constructor(private readonly productRepository: ProductRepository) {}

  async getAllProducts(): Promise<Product[]> {
    return this.productRepository.findAll();
  }

  async getProductById(id: number): Promise<Product | null> {
    return this.productRepository.findById(id);
  }

  async createProduct(data: CreateProductDto): Promise<Product> {
    return this.productRepository.create(data);
  }

  async updateProduct(id: number, data: UpdateProductDto): Promise<Product> {
    return this.productRepository.update(id, data);
  }

  async deleteProduct(id: number): Promise<void> {
    return this.productRepository.delete(id);
  }
}
