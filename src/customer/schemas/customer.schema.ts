import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type CustomerDocument = Customer & Document;

@Schema()
export class Customer {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  father_name: string;

  @Prop({ required: true, unique: true })
  cnic: string;

  @Prop({ required: true })
  phone_primary: string;

  @Prop()
  phone_secondary: string;

  @Prop({ required: true })
  house_no: string;

  @Prop({ required: true })
  block: string;

  @Prop({ required: true })
  sector: string;
}

export const CustomerSchema = SchemaFactory.createForClass(Customer);