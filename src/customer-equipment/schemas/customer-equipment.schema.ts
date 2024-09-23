import { Field, ID, ObjectType } from "@nestjs/graphql";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, Schema as MongooseSchema } from "mongoose";
import { Customer } from "src/customer/schemas/customer.schema";
import { Equipment } from "src/equipment/schemas/equipment.schema";


@Schema()
@ObjectType()
export class CustomerEquipment extends Document {
  @Field(() => ID)
  id: string;

  @Field(() => Customer)
  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'Customer', required: true })
  customerID: Customer

  @Field(() => Equipment)
  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'Equipment', required: true })
  equipmentID: Equipment

  @Field()
  @Prop({ required: true })
  purchase_date: Date
}

export const CustomerEquipmentSchema = SchemaFactory.createForClass(CustomerEquipment)