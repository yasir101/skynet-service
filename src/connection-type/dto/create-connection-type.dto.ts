import { Field, Float, InputType } from "@nestjs/graphql";
import { IsEnum, IsNumber, Min } from "class-validator";
import { TypeofConnection } from "../schemas/connection-type.schema";

@InputType()
export class CreateConnectionTypeDto {
  @Field(() => TypeofConnection)
  @IsEnum(TypeofConnection)
  type: TypeofConnection;

  @Field(() => Float)
  @IsNumber()
  @Min(0)
  installation_charges: number;
}