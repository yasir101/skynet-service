import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ConnectionTypeService } from './connection-type.service';
import { ConnectionType } from './schemas/connection-type.schema';
import { CreateConnectionTypeDto } from './dto/create-connection-type.dto';

@Resolver(() => ConnectionType)
export class ConnectionTypeResolver {
  constructor(
    private readonly connectionTypeService: ConnectionTypeService
  ) {}

  @Mutation(() => ConnectionType)
  createConnectionType(@Args('createConnectionTypeDto') createConnectionTypeDto: CreateConnectionTypeDto) {
    return this.connectionTypeService.create(createConnectionTypeDto);
  }

  @Query(() => [ConnectionType], {name: "connectionTypes"})
  async findAllConnectionTypes() {
    return this.connectionTypeService.findAll()
  }

  @Query(() => ConnectionType, {name: "connectionType"})
  async findConnectionTypeById(@Args('id', {type: () => String}) id: string) {
    return this.connectionTypeService.findOne(id);
  }
}
