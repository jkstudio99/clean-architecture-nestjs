import { Module } from '@nestjs/common';
import { ProductController } from './interface/http/product.controller';
import { OrderController } from './interface/http/order.controller';
import { ProductService } from './application/services/product.service';
import { OrderService } from './application/services/order.service';
import { PrismaProductRepository } from './infrastructure/repositories/prisma-product.repository';
import { PrismaOrderRepository } from './infrastructure/repositories/prisma-order.repository';
import { PrismaService } from './infrastructure/prisma/prisma.service';

@Module({
  controllers: [ProductController, OrderController],
  providers: [
    ProductService,
    OrderService,
    PrismaService,
    {
      provide: 'ProductRepository',
      useClass: PrismaProductRepository,
    },
    {
      provide: 'OrderRepository',
      useClass: PrismaOrderRepository,
    },
  ],
})
export class AppModule {}
