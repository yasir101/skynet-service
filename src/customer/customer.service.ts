import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Customer } from './schemas/customer.schema';
import { Model } from 'mongoose';
import { CreateCustomerDto } from './dto/create-customer.dto';

@Injectable()
export class CustomerService {
  constructor(
    @InjectModel(Customer.name)
    private customerModel: Model<Customer>
  ) {}

  async create(createCustomerInput: CreateCustomerDto): Promise<Customer> {
    const newCustomer = new this.customerModel(CreateCustomerDto);
    return newCustomer.save();
  }

  async findAll(): Promise<Customer[]> {
    return this.customerModel.find().exec();
  }

  async findOne(id: string): Promise<Customer> {
    return this.customerModel.findById(id).exec();
  }

  async findByCNIC(cnic: string): Promise<Customer> {
    return this.customerModel.findOne({ cnic }).exec();
  }
}
