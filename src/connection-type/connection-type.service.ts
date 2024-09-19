import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ConnectionType } from './schemas/connection-type.schema';
import { Model } from 'mongoose';
import { CreateConnectionTypeDto } from './dto/create-connection-type.dto';

@Injectable()
export class ConnectionTypeService {
  constructor(
    @InjectModel(ConnectionType.name)
    private connectionTypeModel: Model<ConnectionType>
  ) {}

  async create(createConnectionTypeDto: CreateConnectionTypeDto): Promise<ConnectionType> {
    const newConnectionType = new this.connectionTypeModel(createConnectionTypeDto);
    return newConnectionType.save();
  }

  async findAll(): Promise<ConnectionType[]> {
    return this.connectionTypeModel.find().exec();
  }

  async findOne(id: string): Promise<ConnectionType> {
    return this.connectionTypeModel.findOne({ id }).exec();
  }
}
