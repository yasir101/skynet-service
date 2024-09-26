import { Module } from '@nestjs/common';
import { SubscriptionService } from './subscription.service';
import { SubscriptionResolver } from './subscription.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { Subscription, SubscriptionSchema } from './schemas/subscription.schema';
import { Customer, CustomerSchema } from 'src/customer/schemas/customer.schema';
import { InternetPackage, InternetPackageSchema } from 'src/internet-package/schemas/internetPackage.schema';
import { ConnectionType, ConnectionTypeSchema } from 'src/connection-type/schemas/connection-type.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {name: Subscription.name, schema: SubscriptionSchema},
      {name: Customer.name, schema: CustomerSchema},
      {name: InternetPackage.name, schema: InternetPackageSchema},
      {name: ConnectionType.name, schema: ConnectionTypeSchema},
    ])
  ],
  providers: [SubscriptionService, SubscriptionResolver]
})
export class SubscriptionModule {}
