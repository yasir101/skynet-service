import { Module } from '@nestjs/common';
import { CustomerModule } from './customer/customer.module';
import { MongooseModule } from '@nestjs/mongoose';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { ConfigModule } from '@nestjs/config';
import { InternetPackageModule } from './internet-package/internet-package.module';
import { ConnectionTypeModule } from './connection-type/connection-type.module';
import { EquipmentModule } from './equipment/equipment.module';
import { CustomerEquipmentModule } from './customer-equipment/customer-equipment.module';


@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }),
    MongooseModule.forRoot(process.env.DATABASE_URL),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
    }),
    CustomerModule,
    InternetPackageModule,
    ConnectionTypeModule,
    EquipmentModule,
    CustomerEquipmentModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
