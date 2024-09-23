import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CustomerEquipment } from './schemas/customer-equipment.schema';
import { CustomerEquipmentService } from './customer-equipment.service';
import { CreateCustomerEquipmentDto } from './dto/create-customer-equipment.dto';
import { UpdateCustomerEquipmentDto } from './dto/update-customer-equipment.dto';

@Resolver(() => CustomerEquipment)
export class CustomerEquipmentResolver {
  constructor(
    private readonly customerEquipmentService: CustomerEquipmentService
  ) {}

  @Mutation(() => CustomerEquipment)
  async createCustomerEquipment(@Args('createCustomerEquipmentDto') createCustomerEquipmentDto: CreateCustomerEquipmentDto) {
    return this.customerEquipmentService.create(createCustomerEquipmentDto)
  }

  @Query(() => [CustomerEquipment], { name: 'customerEquipments' })
  async findAllCustomerEquipment() {
    return this.customerEquipmentService.findAll()
  }

  @Query(() => CustomerEquipment, { name: 'customerEquipment' })
  async findById(@Args('id', {type: () => String}) id: string) {
    return this.customerEquipmentService.findOne(id)
  }

  @Mutation(() => CustomerEquipment)
  async updateCustomerEquipment(
    @Args('id', { type: () => String}) id: string,
    @Args('updateCustomerEquipmentDto') updateCustomerEquipmentDto: UpdateCustomerEquipmentDto) 
    {
      return this.customerEquipmentService.update(id, updateCustomerEquipmentDto)
  }

  @Mutation(() => CustomerEquipment)
  async removeCustomerEquipment(@Args('id', {type: () => String}) id: string) {
    return this.customerEquipmentService.remove(id);
  }

}
