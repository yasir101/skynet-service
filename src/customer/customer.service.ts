import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Customer, CustomerDocument } from './schemas/customer.schema';
import { Model } from 'mongoose';
import { CreateCustomerInput } from './dto/create-customer.dto';
import { CustomerModel } from './models/customer.model';

@Injectable()
export class CustomerService {
  constructor(
    @InjectModel(Customer.name)
    private customerModel: Model<CustomerDocument>
  ) {}

  async create(createCustomerInput: CreateCustomerInput): Promise<CustomerModel> {
    const newCustomer = new this.customerModel(createCustomerInput);
    return newCustomer.save() as any as Promise<CustomerModel>;
  }

  async findAll(): Promise<CustomerModel[]> {
    return this.customerModel.find().exec() as any as Promise<CustomerModel[]>;
  }

  async findOne(id: string): Promise<CustomerModel> {
    return this.customerModel.findById(id).exec() as any as Promise<CustomerModel>;
  }

  async findByCNIC(cnic: string): Promise<CustomerModel> {
    return this.customerModel.findOne({ cnic }).exec() as any as Promise<CustomerModel>;
  }
}
