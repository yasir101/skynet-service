import { Module } from '@nestjs/common';
import { EquipmentService } from './equipment.service';
import { EquipmentResolver } from './equipment.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { Equipment, EquipmentSchema } from './schemas/equipment.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{
      name: Equipment.name,
      schema: EquipmentSchema
    }])
  ],
  providers: [EquipmentService, EquipmentResolver]
})
export class EquipmentModule {}
