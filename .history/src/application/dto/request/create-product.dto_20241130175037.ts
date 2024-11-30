import { PartialType } from '@nestjs/swagger';
import { UpdateProductDto } from './create-product.dto';

export class UpdateProductDto extends PartialType(CreateProductDto) {}
