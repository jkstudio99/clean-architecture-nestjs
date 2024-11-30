import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { OrderRepository } from '../../infrastructure/repositories/order.repository';
import { CreateOrderDto } from '../dtos/request/create-order.dto';
import { UpdateOrderDto } from '../dtos/request/update-order.dto';
import { OrderResponseDto } from '../dtos/response/order-response.dto';

@Injectable()
export class OrderService {
  constructor(
    @Inject('OrderRepository')
    private readonly orderRepository: OrderRepository,
  ) {}

  async getAllOrders(): Promise<OrderResponseDto[]> {
    const orders = await this.orderRepository.findAll();
    return orders.map(OrderResponseDto.fromEntity);
  }

  async getOrderById(id: number): Promise<OrderResponseDto> {
    const order = await this.orderRepository.findById(id);
    if (!order) {
      throw new NotFoundException(`Order with ID ${id} not found`);
    }
    return OrderResponseDto.fromEntity(order);
  }

  async createOrder(createOrderDto: CreateOrderDto): Promise<OrderResponseDto> {
    const order = await this.orderRepository.create(createOrderDto);
    return OrderResponseDto.fromEntity(order);
  }

  async updateOrder(
    id: number,
    updateOrderDto: UpdateOrderDto,
  ): Promise<OrderResponseDto> {
    const order = await this.orderRepository.update(id, updateOrderDto);
    if (!order) {
      throw new NotFoundException(`Order with ID ${id} not found`);
    }
    return OrderResponseDto.fromEntity(order);
  }

  async deleteOrder(id: number): Promise<void> {
    await this.orderRepository.delete(id);
  }
}
