import { Module } from '@nestjs/common';
import { InternetPackageService } from './internet-package.service';
import { InternetPackageResolver } from './internet-package.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { InternetPackage, InternetPackageSchema } from './schemas/internetPackage.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: InternetPackage.name,
        schema: InternetPackageSchema,
      }
    ])
  ],
  providers: [InternetPackageService, InternetPackageResolver]
})
export class InternetPackageModule {}
