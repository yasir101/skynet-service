import { Field, ID, ObjectType } from "@nestjs/graphql";
import { PackageType } from "../package-type.enum";

@ObjectType()
export class InternetPackageModel {
  @Field(() => ID)
  id: string;

  @Field()
  name: string;

  @Field()
  speed: string;

  @Field()
  monthly_fee: number;

  @Field(() => PackageType)
  type: PackageType;
}