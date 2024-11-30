import { Product } from '../entities/product.entity';
import { CreateProductDto } from '../../application/dto/request/create-product.dto';
import { UpdateProductDto } from '../../application/dto/request/update-product.dto';

export interface ProductRepository {
  findAll(): Promise<Product[]>;
  findById(id: number): Promise<Product | null>;
  create(data: CreateProductDto): Promise<Product>;
  update(id: number, data: UpdateProductDto): Promise<Product>;
  delete(id: number): Promise<void>;
}
