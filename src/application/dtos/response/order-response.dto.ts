import { ApiProperty } from '@nestjs/swagger';
import { Order } from '@prisma/client';

export class OrderResponseDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  orderPersonId: number;

  @ApiProperty()
  personAddressId: number;

  @ApiProperty({ required: false })
  deliveryNotes?: string;

  @ApiProperty({ required: false })
  deliveryTime?: string;

  @ApiProperty({ required: false })
  deliveryDay?: string;

  @ApiProperty()
  created: Date;

  @ApiProperty()
  modified: Date;

  static fromEntity(order: Order): OrderResponseDto {
    const dto = new OrderResponseDto();
    dto.id = order.id;
    dto.orderPersonId = order.orderPersonId;
    dto.personAddressId = order.personAddressId;
    dto.deliveryNotes = order.deliveryNotes;
    dto.deliveryTime = order.deliveryTime;
    dto.deliveryDay = order.deliveryDay;
    dto.created = order.created;
    dto.modified = order.modified;
    return dto;
  }
}
