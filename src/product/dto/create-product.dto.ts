import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmptyString } from '@nestjsi/class-validator';

export class CreateProductDto {
  @ApiProperty({
    example: 'Parliament Smart Wallet',
    description: 'it is product name',
  })
  @IsNotEmptyString()
  name: string;

  @ApiProperty({
    example: '25',
    description: 'it is product cost',
    type: () => Number,
  })
  @IsNotEmptyString()
  price: number;
}
