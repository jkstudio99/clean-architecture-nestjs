import { ApiProperty } from '@nestjs/swagger';

export class CreateOrderDto {
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
}
