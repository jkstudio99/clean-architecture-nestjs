import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { PrismaOrderRepository } from './repositories/prisma-order.repository';
import { PrismaProductRepository } from './repositories/prisma-product.repository';
import { OrderService } from './services/order.service';
import { ProductService } from './services/product.service';
import { OrderController } from './controllers/order.controller';
import { ProductController } from './controllers/product.controller';

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
