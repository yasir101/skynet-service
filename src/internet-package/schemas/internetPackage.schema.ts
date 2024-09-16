import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Types } from "mongoose";
import { PackageType } from "../package-type.enum";

export type InternetPackageDocument = InternetPackage & Document;


@Schema()
export class InternetPackage {
  @Prop({ required: true})
  name: string;

  @Prop({ required: true })
  speed: string;

  @Prop({ required: true, type: Types.Decimal128})
  monthly_fee: number;

  @Prop({ required: true, enum: PackageType })
  type: PackageType;
}

export const InternetPackageSchema = SchemaFactory.createForClass(InternetPackage);