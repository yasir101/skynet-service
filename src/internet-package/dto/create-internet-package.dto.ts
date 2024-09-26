import { Field, Float, InputType } from '@nestjs/graphql';
import { IsEnum, IsNotEmpty, IsNumber, IsString, Min } from 'class-validator';
import { PackageType } from '../schemas/internetPackage.schema';

@InputType()
export class CreateInternetPackageDto {
  @Field()
  @IsNotEmpty()
  @IsString()
  name: string;

  @Field()
  @IsString()
  @IsNotEmpty()
  speed: string;

  @Field(() => Float)
  @IsNumber()
  @Min(0)
  monthly_fee: number;

  @Field(() => PackageType)
  @IsEnum(PackageType)
  type: PackageType;
}
