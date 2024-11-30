import { Module } from '@nestjs/common';
import { ProductController } from './interface/http/product.controller';
import { ProductService } from './application/services/product.service';
import { PrismaProductRepository } from './infrastructure/repositories/prisma-product.repository';
import { PrismaService } from './infrastructure/prisma/prisma.service';

@Module({
  controllers: [ProductController],
  providers: [
    ProductService,
    PrismaService,
    {
      provide: 'ProductRepository',
      useClass: PrismaProductRepository,
    },
  ],
})
export class AppModule {}
