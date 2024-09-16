import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { InternetPackage, InternetPackageDocument } from './schemas/internetPackage.schema';
import { Model } from 'mongoose';
import { CreateInternetPackage } from './dto/create-internet-package.dto';
import { InternetPackageModel } from './models/internetPackage.model'

@Injectable()
export class InternetPackageService {
  constructor(
    @InjectModel(InternetPackage.name)
    private internetPackageModel: Model<InternetPackageDocument>
  ) {}

  async createInternetPackage(createInternetPackage: CreateInternetPackage): Promise<InternetPackageModel> {
    const newPackage = new this.internetPackageModel(createInternetPackage)
    return newPackage.save() as any as Promise<InternetPackageModel>;
  }

  async getAllPackages(): Promise<InternetPackageModel[]> {
    return this.internetPackageModel.find().exec() as any as Promise<InternetPackageModel[]>
  }

  async getPackageById(id: string): Promise<InternetPackageModel> {
    return this.internetPackageModel.findById(id).exec() as any as Promise<InternetPackageModel>    
  }

  async getPackageByName(name: string): Promise<InternetPackageModel> {
    return this.internetPackageModel.findOne({ name }).exec() as any as Promise<InternetPackageModel>
  }
}
