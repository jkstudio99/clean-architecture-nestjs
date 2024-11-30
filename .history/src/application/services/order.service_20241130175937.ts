import { Injectable } from '@nestjs/common';
import { OrderRepository } from '../repositories/order.repository';
import { CreateOrderDto } from '../dto/create-order.dto';
import { UpdateOrderDto } from '../dto/update-order.dto';

@Injectable()
export class OrderService {
  constructor(private readonly orderRepository: OrderRepository) {}

  async getAllOrders() {
    return this.orderRepository.findAll();
  }

  async getOrderById(id: number) {
    return this.orderRepository.findById(id);
  }

  async createOrder(createOrderDto: CreateOrderDto) {
    return this.orderRepository.create(createOrderDto);
  }

  async updateOrder(id: number, updateOrderDto: UpdateOrderDto) {
    return this.orderRepository.update(id, updateOrderDto);
  }

  async deleteOrder(id: number) {
    return this.orderRepository.delete(id);
  }
}
