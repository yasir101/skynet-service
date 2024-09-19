import { Field, ID, ObjectType } from "@nestjs/graphql";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@ObjectType()
@Schema()
export class Customer extends Document {
  @Field(() => ID)
  id: string;
  
  @Field()
  @Prop({ required: true })
  name: string;

  @Field()
  @Prop({ required: true })
  father_name: string;

  @Field()
  @Prop({ required: true, unique: true })
  cnic: string;

  @Field()
  @Prop({ required: true })
  phone_primary: string;

  @Field({ nullable: true })
  @Prop()
  phone_secondary: string;

  @Field()
  @Prop({ required: true })
  house_no: string;

  @Field()
  @Prop({ required: true })
  block: string;

  @Field()
  @Prop({ required: true })
  sector: string;
}

export const CustomerSchema = SchemaFactory.createForClass(Customer);