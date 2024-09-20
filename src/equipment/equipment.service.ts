import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Equipment } from './schemas/equipment.schema';
import { Model } from 'mongoose';
import { CreateEquipmentDto } from './dto/create-equipment.dto';
import { UpdateEquipmentDto } from './dto/update-equipment.dto';

@Injectable()
export class EquipmentService {
  constructor(
    @InjectModel(Equipment.name)
    private equipmentModel: Model<Equipment>
  ) {}

  async create(createEquipmentDto: CreateEquipmentDto): Promise<Equipment> {
    const newEquipment = new this.equipmentModel(createEquipmentDto)
    return newEquipment.save();
  }

  async findAll(): Promise<Equipment[]> {
    return this.equipmentModel.find().exec()
  }

  async findOne(id: string): Promise<Equipment> {
    return this.equipmentModel.findOne({ id }).exec()
  }

  async update(id: string, updateEquipmentDto: UpdateEquipmentDto): Promise<Equipment> {
    return this.equipmentModel.findByIdAndUpdate(id, updateEquipmentDto, {new: true}).exec()
  }

  async remove(id: string): Promise<Equipment> {
    return this.equipmentModel.findByIdAndDelete(id)
  }
}
