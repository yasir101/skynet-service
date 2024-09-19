import { InputType, Field } from "@nestjs/graphql";
import { IsNotEmpty, IsOptional, IsString } from "class-validator";


@InputType()
export class CreateCustomerDto{
  @Field()
  @IsNotEmpty()
  @IsString()
  name: string;

  @Field()
  @IsNotEmpty()
  @IsString()
  father_name: string;

  @Field()
  @IsNotEmpty()
  @IsString()
  cnic: string;

  @Field()
  @IsNotEmpty()
  @IsString()
  phone_primary: string;

  @Field()
  @IsOptional()
  @IsString()
  phone_secondary: string;

  @Field()
  @IsNotEmpty()
  @IsString()
  house_no: string;

  @Field()
  @IsNotEmpty()
  @IsString()
  block: string;

  @Field()
  @IsNotEmpty()
  @IsString()
  sector: string;
}