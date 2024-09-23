import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CustomerEquipment } from './schemas/customer-equipment.schema';
import { Model } from 'mongoose';
import { CreateCustomerEquipmentDto } from './dto/create-customer-equipment.dto';
import { UpdateCustomerEquipmentDto } from './dto/update-customer-equipment.dto';

@Injectable()
export class CustomerEquipmentService {
  constructor(
    @InjectModel(CustomerEquipment.name)
    private customerEquipmentModel: Model<CustomerEquipment>
  ) {}

  async create(createCustomerEquipmentDto: CreateCustomerEquipmentDto): Promise<CustomerEquipment> {
    const newCE = new this.customerEquipmentModel(createCustomerEquipmentDto)
    return newCE.save()
  }

  async findAll(): Promise<CustomerEquipment[]> {
    return this.customerEquipmentModel.find().exec()
  }

  async findOne(id: string): Promise<CustomerEquipment> {
    return this.customerEquipmentModel.findOne({ id }).exec()
  }

  async update(id: string, updateCustomerEquipmentDto: UpdateCustomerEquipmentDto): Promise<CustomerEquipment> {
    return this.customerEquipmentModel.findByIdAndUpdate(id, updateCustomerEquipmentDto, {new: true}).exec()
  }

  async remove(id: string): Promise<CustomerEquipment> {
    return this.customerEquipmentModel.findByIdAndDelete(id)
  }
}
