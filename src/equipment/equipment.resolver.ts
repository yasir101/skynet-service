import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { EquipmentService } from './equipment.service';
import { Equipment } from './schemas/equipment.schema';
import { CreateEquipmentDto } from './dto/create-equipment.dto';
import { UpdateEquipmentDto } from './dto/update-equipment.dto';
 
@Resolver(() => Equipment)
export class EquipmentResolver {
  constructor(
    private readonly equipmentService: EquipmentService
  ) {}

  @Mutation(() => Equipment)
  async createEquipment(@Args('createEquipmentDto') createEquipmentDto: CreateEquipmentDto) {
    return this.equipmentService.create(createEquipmentDto);
  }

  @Query(() => [Equipment], {name: 'equipments'})
  async findAllEquipments() {
    return this.equipmentService.findAll()
  }

  @Query(() => Equipment, {name: 'equipment'})
  async findEquipment(@Args('id', {type: () => String}) id: string) {
    return this.equipmentService.findOne(id) 
  }

  @Mutation(() => Equipment)
  async updateEquipment(
    @Args('id', {type: () => String}) id: string,
    @Args('updateEquipmentDto') updateEquipmentDto: UpdateEquipmentDto
  ) {
    return this.equipmentService.update(id, updateEquipmentDto)
  }

  @Mutation(() => Equipment)
  async removeEquipment(@Args('id', {type: () => String}) id: string) {
    return this.equipmentService.remove(id)
  }

}
