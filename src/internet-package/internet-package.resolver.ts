import { Args, Mutation, Resolver, Query } from '@nestjs/graphql';
import { InternetPackageModel } from './models/internetPackage.model';
import { InternetPackageService } from './internet-package.service';
import { CreateInternetPackage } from './dto/create-internet-package.dto';

@Resolver(() => InternetPackageModel)
export class InternetPackageResolver {
  constructor(
    private readonly internetPackageService: InternetPackageService
  ) {}

  @Mutation(() => InternetPackageModel)
  async createPackage(@Args('createInternetPackage')  createInternetPackage: CreateInternetPackage) {
    return this.internetPackageService.createInternetPackage(createInternetPackage)
  }

  @Query(() => [InternetPackageModel], {name: 'internetPackages'})
  async findAllPackages() {
    return this.internetPackageService.getAllPackages();
  }

  @Query(() => InternetPackageModel, {name: 'internetPackage'})
  async findById(@Args('id', {type: () => String}) id: string) {
    return this.internetPackageService.getPackageById(id); 
  }

  @Query(() => InternetPackageModel, {name: 'InternetPackageByName'})
  async findByPackageName(@Args('name', {type: () => String})  name: string) {
    return this.internetPackageService.getPackageByName(name);
  }
}
