import { Inject, Injectable } from '@nestjs/common';
import { ProductRepository } from '../../domain/repositories/product.repository';
import { CreateProductDto } from '../dtos/request/create-product.dto';
import { UpdateProductDto } from '../dtos/request/update-product.dto';
import { ProductResponseDto } from '../dtos/response/product-response.dto';

@Injectable()
export class ProductService {
  constructor(
    @Inject('ProductRepository')
    private readonly productRepository: ProductRepository,
  ) {}

  async getAllProducts(): Promise<ProductResponseDto[]> {
    const products = await this.productRepository.findAll();
    return products.map(ProductResponseDto.fromEntity);
  }

  async getProductById(id: number): Promise<ProductResponseDto> {
    const product = await this.productRepository.findById(id);
    return ProductResponseDto.fromEntity(product);
  }

  async createProduct(
    createProductDto: CreateProductDto,
  ): Promise<ProductResponseDto> {
    const product = await this.productRepository.create(createProductDto);
    return ProductResponseDto.fromEntity(product);
  }

  async updateProduct(
    id: number,
    updateProductDto: UpdateProductDto,
  ): Promise<ProductResponseDto> {
    const product = await this.productRepository.update(id, updateProductDto);
    return ProductResponseDto.fromEntity(product);
  }

  async deleteProduct(id: number): Promise<void> {
    return this.productRepository.delete(id);
  }
}
