import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CustomerService } from './customer.service';
import { CreateCustomerInput } from './dto/create-customer.dto';
import { CustomerModel } from './models/customer.model';

@Resolver(() => CustomerModel)
export class CustomerResolver {
  constructor(private readonly customerService: CustomerService) {}

  @Mutation(() => CustomerModel)
  async createCustomer(@Args('createCustomerInput') createCustomerInput: CreateCustomerInput) {
    return this.customerService.create(createCustomerInput);
  }
  

  @Query(() => [CustomerModel], {name: 'customers'})
  async findAllCustomers() {
    return this.customerService.findAll()
  }

  @Query(() => CustomerModel, {name: 'customer'})
  async findOne(@Args('id', {type: ()=> String}) id: string) {
    return this.customerService.findOne(id);
  }

  @Query(() => CustomerModel, {name: 'customerByCNIC'})
  async findByCNIC(@Args('cnic', { type: () => String }) cnic: string) {
    return this.customerService.findByCNIC(cnic);
  }
}
