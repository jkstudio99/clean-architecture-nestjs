import { Order } from '@prisma/client';

export interface OrderRepository {
  findAll(): Promise<Order[]>;
  findById(id: number): Promise<Order | null>;
  create(data: Partial<Order>): Promise<Order>;
  update(id: number, data: Partial<Order>): Promise<Order>;
  delete(id: number): Promise<void>;
}
