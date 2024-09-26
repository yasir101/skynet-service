import { Field, Float, ID, ObjectType, registerEnumType } from "@nestjs/graphql";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, Types } from "mongoose";

export enum PackageType {
  SILVER = 'silver',
  GOLD = 'gold',
}

registerEnumType(PackageType, {
  name: 'PackageType'
})

@ObjectType()
@Schema()
export class InternetPackage extends Document {
  @Field(() => ID)
  id: string;

  @Field()  
  @Prop({ required: true})
  name: string;

  @Field()
  @Prop({ required: true })
  speed: string;

  @Field(() => Float)
  @Prop({ required: true, type: Types.Decimal128})
  monthly_fee: number;

  @Field(() => PackageType)
  @Prop({ required: true, enum: PackageType })
  type: PackageType;
}

export const InternetPackageSchema = SchemaFactory.createForClass(InternetPackage);