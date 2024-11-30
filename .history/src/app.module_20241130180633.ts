import { Module } from '@nestjs/common';
import { PrismaService } from './infrastructure/prisma/prisma.service';
import { PrismaOrderRepository } from './infrastructure/repositories/prisma-order.repository';
import { OrderService } from './application/services/order.service';
import { OrderController } from './interface/http/order.controller';
import { PrismaModule } from './infrastructure/prisma/prisma.module';
import { ProductController } from './interface/http/product.controller';
import { ProductService } from './application/services/product.service';
import { PrismaProductRepository } from './infrastructure/repositories/prisma-product.repository';

@Module({
  imports: [PrismaModule],
  controllers: [ProductController],
  providers: [
    ProductService,
    {
      provide: 'ProductRepository',
      useClass: PrismaProductRepository,
    },
  ],
})
export class AppModule {}
