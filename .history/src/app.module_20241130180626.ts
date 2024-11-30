import { Module } from '@nestjs/common';
import { PrismaService } from './infrastructure/prisma/prisma.service';
import { PrismaOrderRepository } from './infrastructure/repositories/prisma-order.repository';
import { OrderService } from './application/services/order.service';
import { OrderController } from './interface/http/order.controller';

@Module({
  controllers: [OrderController],
  providers: [
    PrismaService,
    { provide: 'OrderRepository', useClass: PrismaOrderRepository },
    OrderService,
  ],
})
export class AppModule {}
