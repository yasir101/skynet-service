import { InputType, PartialType } from "@nestjs/graphql";
import { CreateInternetPackageDto } from "./create-internet-package.dto";


@InputType()
export class UpdateInternetPackageDto extends PartialType(CreateInternetPackageDto) {

}