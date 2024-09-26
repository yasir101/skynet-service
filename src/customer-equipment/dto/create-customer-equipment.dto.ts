import { Field, InputType } from '@nestjs/graphql';
import { IsDateString, IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class CreateCustomerEquipmentDto {
  @Field()
  @IsString()
  @IsNotEmpty()
  customerID: string;

  @Field()
  @IsString()
  @IsNotEmpty()
  equipmentID: string;

  @Field()
  @IsDateString()
  @IsNotEmpty()
  purchase_date: Date;
}
