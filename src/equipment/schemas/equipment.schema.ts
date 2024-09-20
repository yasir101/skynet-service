import { Field, Float, ID, ObjectType } from "@nestjs/graphql";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, Types } from "mongoose";

@ObjectType()
@Schema()
export class Equipment extends Document {
  @Field(() => ID)
  id: string;

  @Field()
  @Prop({ required: true })
  type: string;

  @Field()
  @Prop()
  equipment_model: string;

  @Field(() => Float)
  @Prop({ type: Types.Decimal128 })
  price: number;

  @Field()
  @Prop()
  warranty: string;
}

export const EquipmentSchema = SchemaFactory.createForClass(Equipment)