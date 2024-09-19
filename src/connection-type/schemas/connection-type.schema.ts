import { Field, Float, ID, ObjectType, registerEnumType } from "@nestjs/graphql";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, Types } from "mongoose";

export enum TypeofConnection {
  WITHWIRE = 'With_wire',
  WITHOUTWIRE = 'Without_wire',
}

registerEnumType(TypeofConnection, {
  name: 'TypeofConnection'
});

@Schema()
@ObjectType()
export class ConnectionType extends Document {
  @Field(() => ID)
  id: string

  @Field(() => TypeofConnection)
  @Prop({ required: true, enum: TypeofConnection })
  type: TypeofConnection

  @Field(() => Float)
  @Prop({ type: Types.Decimal128 })
  installation_charges: number
}

export const ConnectionTypeSchema = SchemaFactory.createForClass(ConnectionType);