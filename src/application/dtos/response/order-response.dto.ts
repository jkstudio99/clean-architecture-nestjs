import { ApiProperty } from '@nestjs/swagger';

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
}
