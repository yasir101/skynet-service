import { Args, Mutation, Resolver, Query } from '@nestjs/graphql';
import { InternetPackageService } from './internet-package.service';
import { InternetPackage } from './schemas/internetPackage.schema';
import { CreateInternetPackageDto } from './dto/create-internet-package.dto';
import { UpdateInternetPackageDto } from './dto/update-internet-package.dto';

@Resolver(() => InternetPackage)
export class InternetPackageResolver {
  constructor(
    private readonly internetPackageService: InternetPackageService
  ) {}

  @Mutation(() => InternetPackage)
  async createPackage(@Args('createInternetPackageDto')  createInternetPackageDto: CreateInternetPackageDto) {
    return this.internetPackageService.create(createInternetPackageDto)
  }

  @Query(() => [InternetPackage], {name: 'internetPackages'})
  async findAllPackages() {
    return this.internetPackageService.findAll();
  }

  @Query(() => InternetPackage, {name: 'internetPackage'})
  async findById(@Args('id', {type: () => String}) id: string) {
    return this.internetPackageService.findOne(id); 
  }

  @Query(() => InternetPackage, {name: 'InternetPackageByName'})
  async findByPackageName(@Args('name', {type: () => String})  name: string) {
    return this.internetPackageService.findByName(name);
  }

  @Mutation(() => InternetPackage)
  updateInternetPackage(
    @Args('id', { type: () => String }) id: string,
    @Args('updateInternetPackageDto') updateInternetPackageDto: UpdateInternetPackageDto,
  ) {
    return this.internetPackageService.update(id, updateInternetPackageDto);
  }

  @Mutation(() => InternetPackage)
  removeInternetPackage(@Args('id', { type: () => String }) id: string) {
    return this.internetPackageService.remove(id);
  }
}
