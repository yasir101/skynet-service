import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Subscription } from './schemas/subscription.schema';
import { Model } from 'mongoose';
import { CreateSubscriptionDto } from './dto/create-subscription.dto';

@Injectable()
export class SubscriptionService {
  constructor(
    @InjectModel(Subscription.name)
    private subscriptionModel: Model<Subscription>
  ) {}

  async create(createSubscriptionDto: CreateSubscriptionDto): Promise<Subscription> {
    const newSubscription = new this.subscriptionModel(createSubscriptionDto)
    return newSubscription.save();
  }

  async customerSubscriptions(customerID: string): Promise<Subscription[]> {
    return this.subscriptionModel.find({ customerID }).exec();
  }

  async customersActiveSubscription(customerID: string): Promise<Subscription> {
    const activeSubscription = await this.subscriptionModel.findOne({ customerID, isActive: true }).exec()
    if(!activeSubscription) {
      throw new NotFoundException(`No active subscription found for customer with ID ${customerID}`)
    }
    return activeSubscription;
  }

  async deactivate(customerID: string): Promise<Subscription> {
    const activeSubscription = await this.subscriptionModel.findOne({ customerID, isActive: true }).exec()
    if(!activeSubscription) {
      throw new NotFoundException(`No active subscription found for customer with ID ${customerID}`)
    }

    const currenntDate = new Date
    if(new Date(activeSubscription.endDate) < currenntDate) {
      activeSubscription.isActive = false
      return await activeSubscription.save();
    }else {
      throw new Error(`Subscription is still active until ${activeSubscription.endDate}`);
    } 
  }
}
