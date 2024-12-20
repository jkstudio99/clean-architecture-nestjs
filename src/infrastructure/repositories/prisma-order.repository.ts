import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { OrderRepository } from './order.repository';
import { Order } from '@prisma/client';
import { CreateOrderDto } from 'src/application/dtos/request/create-order.dto';
import { UpdateOrderDto } from 'src/application/dtos/request/update-order.dto';

@Injectable()
export class PrismaOrderRepository implements OrderRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(): Promise<Order[]> {
    return this.prisma.order.findMany();
  }

  async findById(id: number): Promise<Order | null> {
    return this.prisma.order.findUnique({ where: { id } });
  }

  async create(data: CreateOrderDto): Promise<Order> {
    return this.prisma.order.create({ data });
  }

  async update(id: number, data: UpdateOrderDto): Promise<Order> {
    return this.prisma.order.update({ where: { id }, data });
  }

  async delete(id: number): Promise<void> {
    await this.prisma.order.delete({ where: { id } });
  }
}
