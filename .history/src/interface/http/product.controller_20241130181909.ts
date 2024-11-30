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
    return this.productService.getAllProducts();
  }

  @ApiOperation({ summary: 'Get a product by id' })
  @ApiResponse({ status: 200, description: 'Return a product.' })
  @ApiResponse({ status: 404, description: 'Product not found.' })
  @Get(':id')
  async getById(@Param('id', ParseIntPipe) id: number) {
    return this.productService.getProductById(id);
  }

  @Post()
  async create(@Body() createProductDto: CreateProductDto) {
    return this.productService.createProduct(createProductDto);
  }

  @Put(':id')
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
