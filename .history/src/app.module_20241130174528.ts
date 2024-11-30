import { Module } from '@nestjs/common';
import { PrismaService } from './infrastructure/prisma/prisma.service';
import { PrismaProductRepository } from './infrastructure/repositories/prisma-product.repository';
import { ProductService } from './application/services/product.service';
import { ProductController } from './interface/http/product.controller';

@Module({
  controllers: [ProductController],
  providers: [
    PrismaService,
    { provide: 'ProductRepository', useClass: PrismaProductRepository },
    ProductService,
  ],
})
export class AppModule {}
