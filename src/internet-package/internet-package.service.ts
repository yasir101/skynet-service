import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { InternetPackage} from './schemas/internetPackage.schema';
import { Model } from 'mongoose';
import { CreateInternetPackageDto } from './dto/create-internet-package.dto';
import { UpdateInternetPackageDto } from './dto/update-internet-package.dto';

@Injectable()
export class InternetPackageService {
  constructor(
    @InjectModel(InternetPackage.name)
    private internetPackageModel: Model<InternetPackage>
  ) {}

  async create(createInternetPackageDto: CreateInternetPackageDto): Promise<InternetPackage> {
    const newPackage = new this.internetPackageModel(createInternetPackageDto)
    return newPackage.save();
  }

  async findAll(): Promise<InternetPackage[]> {
    return this.internetPackageModel.find().exec();
  }

  async findOne(id: string): Promise<InternetPackage> {
    return this.internetPackageModel.findById(id).exec();
  }

  async findByName(name: string): Promise<InternetPackage> {
    return this.internetPackageModel.findOne({ name }).exec();
  }
  
  async update(id: string, updateInternetPackageDto: UpdateInternetPackageDto): Promise<InternetPackage> {
    return this.internetPackageModel.findByIdAndUpdate(id, updateInternetPackageDto, {new: true}).exec();
  }

  async remove(id: string): Promise<InternetPackage> {
    return this.internetPackageModel.findByIdAndDelete(id);
  }

}
