import { Module } from '@nestjs/common';
import { ConnectionTypeService } from './connection-type.service';
import { ConnectionTypeResolver } from './connection-type.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { ConnectionType, ConnectionTypeSchema } from './schemas/connection-type.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: ConnectionType.name,
        schema: ConnectionTypeSchema,
      }
    ])
  ],
  providers: [ConnectionTypeService, ConnectionTypeResolver]
})
export class ConnectionTypeModule {}
