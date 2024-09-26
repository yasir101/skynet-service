import { Args, Mutation, Resolver, Query} from '@nestjs/graphql';
import { SubscriptionService } from './subscription.service';
import { Subscription } from './schemas/subscription.schema';
import { CreateSubscriptionDto } from './dto/create-subscription.dto';


@Resolver(() => Subscription)
export class SubscriptionResolver {
  constructor(
    private readonly subscriptionService: SubscriptionService
  ) {}

  @Mutation(() => Subscription)
  async createSubscription(@Args('createSubscriptionDto') createSubscriptionDto: CreateSubscriptionDto) {
    return this.subscriptionService.create(createSubscriptionDto)
  }

  @Query(() => [Subscription], {name: 'customerSubscriptions'})
  async findCustomerSubscriptions(@Args('customerID', {type: () => String}) customerID: string) {
    return this.subscriptionService.customerSubscriptions(customerID)
  }

  @Query(() => Subscription, {name: 'customersActiveSubsription'})
  async findCustomersActiveSubscription(@Args('customerID', {type: () => String}) customerID: string) {
    return this.subscriptionService.customersActiveSubscription(customerID)
  }

  @Mutation(() => Subscription)
  async deactiveSubscrription(@Args('customerID', { type: () => String}) customerID: string) {
    return this.subscriptionService.deactivate(customerID)
  }
}
