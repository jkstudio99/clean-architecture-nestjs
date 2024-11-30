import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { PrismaOrderRepository } from './repositories/prisma-order.repository';
import { OrderService } from './services/order.service';
import { OrderController } from './controllers/order.controller';

@Module({
  controllers: [OrderController],
  providers: [
    PrismaService,
    { provide: 'OrderRepository', useClass: PrismaOrderRepository },
    OrderService,
  ],
})
export class AppModule {}
