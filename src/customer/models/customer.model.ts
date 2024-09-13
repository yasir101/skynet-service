import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
export class CustomerModel {
  @Field(() => ID)
  id: string;

  @Field()
  name: string;

  @Field()
  father_name: string;

  @Field()
  cnic: string;

  @Field()
  phone_primary: string;

  @Field({ nullable: true })
  phone_secondary?: string;

  @Field()
  house_no: string;

  @Field()
  block: string;

  @Field()
  sector: string;
}