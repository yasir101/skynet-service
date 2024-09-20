import { Field, Float, InputType } from "@nestjs/graphql";
import { IsNumber, IsString, Min } from "class-validator";

@InputType()
export class CreateEquipmentDto {
  @Field()
  @IsString()
  type: string;

  @Field()
  @IsString()
  equipment_model: string;

  @Field(() => Float)
  @IsNumber()
  @Min(0)
  price: number;

  @Field()
  @IsString()
  warranty: string;
}