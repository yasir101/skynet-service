import { Module } from '@nestjs/common';
import { CustomerEquipmentService } from './customer-equipment.service';
import { CustomerEquipmentResolver } from './customer-equipment.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { CustomerEquipment, CustomerEquipmentSchema } from './schemas/customer-equipment.schema';
import { Customer, CustomerSchema } from 'src/customer/schemas/customer.schema';
import { Equipment, EquipmentSchema } from 'src/equipment/schemas/equipment.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {name: CustomerEquipment.name, schema: CustomerEquipmentSchema},
      {name: Customer.name, schema: CustomerSchema},
      {name: Equipment.name, schema: EquipmentSchema},
    ])
  ],
  providers: [CustomerEquipmentService, CustomerEquipmentResolver]
})
export class CustomerEquipmentModule {}
