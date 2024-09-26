import { Field, ObjectType, registerEnumType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';
import { ConnectionType } from 'src/connection-type/schemas/connection-type.schema';
import { Customer } from 'src/customer/schemas/customer.schema';
import { InternetPackage } from 'src/internet-package/schemas/internetPackage.schema';

export enum SubscriptionType {
  MONTHLY = 'monthly',
  HALFMONTH = 'half_month',
  WEEKLY = 'weekly',
}

registerEnumType(SubscriptionType, {
  name: 'SubscriptionType',
});

@Schema()
@ObjectType()
export class Subscription extends Document {
  @Field()
  id: string;

  @Field(() => Customer)
  @Prop({
    type: MongooseSchema.Types.ObjectId,
    ref: 'Customer',
    required: true,
  })
  customerID: Customer;

  @Field(() => InternetPackage)
  @Prop({
    type: MongooseSchema.Types.ObjectId,
    ref: 'InternetPackage',
    required: true,
  })
  interetPackageID: InternetPackage;

  @Field(() => ConnectionType)
  @Prop({
    type: MongooseSchema.Types.ObjectId,
    ref: 'ConnectionType',
    required: true,
  })
  connectionTypeID: ConnectionType;

  @Field()
  @Prop({ required: true })
  startDate: Date;

  @Field()
  @Prop({ required: true })
  endDate: Date;

  @Field()
  @Prop({ required: true })
  isActive: boolean;

  @Field(() => SubscriptionType)
  @Prop({ required: true, enum: SubscriptionType })
  subscriptionType: SubscriptionType;
}

export const SubscriptionSchema = SchemaFactory.createForClass(Subscription);
