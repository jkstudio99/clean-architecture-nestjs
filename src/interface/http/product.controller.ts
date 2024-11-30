import {
  Controller,
  Get,
  Post,
  Delete,
  Body,
  Param,
  ParseIntPipe,
  Put,
} from '@nestjs/common';
import { ProductService } from '../../application/services/product.service';
import { CreateProductDto } from '../../application/dtos/request/create-product.dto';
import { UpdateProductDto } from '../../application/dtos/request/update-product.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('products')
@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @ApiOperation({ summary: 'Get all products' })
  @ApiResponse({ status: 200, description: 'Return all products.' })
  @Get()
  async getAll() {
    return await this.productService.getAllProducts();
  }

  @ApiOperation({ summary: 'Get a product by id' })
  @ApiResponse({ status: 200, description: 'Return a product.' })
  @ApiResponse({ status: 404, description: 'Product not found.' })
  @Get(':id')
  async getById(@Param('id', ParseIntPipe) id: number) {
    return await this.productService.getProductById(id);
  }

  @ApiOperation({ summary: 'Create a new product' })
  @ApiResponse({ status: 201, description: 'Product created successfully.' })
  @Post()
  async create(@Body() createProductDto: CreateProductDto) {
    return await this.productService.createProduct(createProductDto);
  }

  @ApiOperation({ summary: 'Update a product' })
  @ApiResponse({ status: 200, description: 'Product updated successfully.' })
  @ApiResponse({ status: 404, description: 'Product not found.' })
  @Put(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateProductDto: UpdateProductDto,
  ) {
    return await this.productService.updateProduct(id, updateProductDto);
  }

  @ApiOperation({ summary: 'Delete a product' })
  @ApiResponse({ status: 200, description: 'Product deleted successfully.' })
  @ApiResponse({ status: 404, description: 'Product not found.' })
  @Delete(':id')
  async delete(@Param('id', ParseIntPipe) id: number) {
    return await this.productService.deleteProduct(id);
  }
}
