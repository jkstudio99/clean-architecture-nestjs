import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { ProductService } from '../services/product.service';
import { CreateProductDto } from '../dto/request/create-product.dto';
import { UpdateProductDto } from '../dto/request/update-product.dto';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  async getAll() {
    return this.productService.getAllProducts();
  }

  @Get(':id')
  async getById(@Param('id') id: number) {
    return this.productService.getProductById(id);
  }

  @Post()
  async create(@Body() createProductDto: CreateProductDto) {
    return this.productService.createProduct(createProductDto);
  }

  @Patch(':id')
  async update(
    @Param('id') id: number,
    @Body() updateProductDto: UpdateProductDto,
  ) {
    return this.productService.updateProduct(id, updateProductDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: number) {
    return this.productService.deleteProduct(id);
  }
}
