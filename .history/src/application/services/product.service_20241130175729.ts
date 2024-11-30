import { Inject, Injectable } from '@nestjs/common';
import { ProductRepository } from '../../domain/repositories/product.repository';
import { UpdateProductDto } from '../dto/request/update-product.dto';
import { CreateProductDto } from '../dto/request/create-product.dto';

@Injectable()
export class ProductService {
  constructor(
    @Inject('ProductRepository')
    private readonly productRepository: ProductRepository
  ) {}

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
