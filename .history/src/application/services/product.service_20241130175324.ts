import { Injectable } from '@nestjs/common';
import { ProductRepository } from '../../domain/repositories/product.repository';
import { UpdateProductDto } from '../dto/request/update-product.dto';
import { CreateProductDto } from '../../../.history/src/application/dto/CreateProductDto_20241130174033';
@Injectable()
export class ProductService {
  constructor(private readonly productRepository: ProductRepository) {}

  async getAllProducts() {
    return this.productRepository.findAll();
  }

  async getProductById(id: number) {
    return this.productRepository.findById(id);
  }

  async createProduct(createProductDto: CreateProductDto) {
    return this.productRepository.create(createProductDto);
  }

  async updateProduct(id: number, updateProductDto: UpdateProductDto) {
    return this.productRepository.update(id, updateProductDto);
  }

  async deleteProduct(id: number) {
    return this.productRepository.delete(id);
  }
}
