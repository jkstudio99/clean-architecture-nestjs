import { Product } from '@prisma/client';
import { CreateProductDto } from '../../application/dtos/request/create-product.dto';
import { UpdateProductDto } from '../../application/dtos/request/update-product.dto';

export interface ProductRepository {
  findAll(): Promise<Product[]>;
  findById(id: number): Promise<Product>;
  create(data: CreateProductDto): Promise<Product>;
  update(id: number, data: UpdateProductDto): Promise<Product>;
  delete(id: number): Promise<void>;
}
