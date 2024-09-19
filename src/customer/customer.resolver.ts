import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CustomerService } from './customer.service';
import { Customer } from './schemas/customer.schema';
import { CreateCustomerDto } from './dto/create-customer.dto';

@Resolver(() => Customer)
export class CustomerResolver {
  constructor(private readonly customerService: CustomerService) {}

  @Mutation(() => Customer)
  async createCustomer(@Args('createCustomerDto') createCustomerDto: CreateCustomerDto) {
    return this.customerService.create(createCustomerDto);
  }
  

  @Query(() => [Customer], {name: 'customers'})
  async findAllCustomers() {
    return this.customerService.findAll()
  }

  @Query(() => Customer, {name: 'customer'})
  async findOne(@Args('id', {type: ()=> String}) id: string) {
    return this.customerService.findOne(id);
  }

  @Query(() => Customer, {name: 'customerByCNIC'})
  async findByCNIC(@Args('cnic', { type: () => String }) cnic: string) {
    return this.customerService.findByCNIC(cnic);
  }
}
