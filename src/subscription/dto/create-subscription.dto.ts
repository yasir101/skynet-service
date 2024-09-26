import { Field, InputType } from '@nestjs/graphql';
import {
  IsBoolean,
  IsDateString,
  IsEnum,
  IsNotEmpty,
  IsString,
} from 'class-validator';
import { SubscriptionType } from '../schemas/subscription.schema';

@InputType()
export class CreateSubscriptionDto {
  @Field()
  @IsString()
  @IsNotEmpty()
  customerID: string;

  @Field()
  @IsString()
  @IsNotEmpty()
  interetPackageID: string;

  @Field()
  @IsString()
  @IsNotEmpty()
  connectionTypeID: string;

  @Field()
  @IsDateString()
  @IsNotEmpty()
  startDate: Date;

  @Field()
  @IsDateString()
  @IsNotEmpty()
  endDate: Date;

  @Field()
  @IsBoolean()
  @IsNotEmpty()
  isActive: boolean;

  @Field(() => SubscriptionType)
  @IsEnum(SubscriptionType)
  subscriptionType: SubscriptionType;
}
