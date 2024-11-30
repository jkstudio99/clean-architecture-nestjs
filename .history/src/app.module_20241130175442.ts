import { Module } from '@nestjs/common';
import { PrismaService } from './infrastructure/prisma/prisma.service';
import { PrismaOrderRepository } from './infrastructure/repositories/prisma-order.repository';
import { PrismaProductRepository } from './infrastructure/repositories/prisma-product.repository';
import { OrderService } from './application/services/order.service';
import { ProductService } from './application/services/product.service';
import { OrderController } from './interface/http/order.controller';
import { ProductController } from './interface/http/product.controller';

@Module({
  controllers: [OrderController, ProductController],
  providers: [
    PrismaService,
    { provide: 'OrderRepository', useClass: PrismaOrderRepository },
    { provide: 'ProductRepository', useClass: PrismaProductRepository },
    OrderService,
    ProductService,
  ],
})
export class AppModule {}
