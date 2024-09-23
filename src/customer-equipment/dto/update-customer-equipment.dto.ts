import { InputType, PartialType } from "@nestjs/graphql";
import { CreateCustomerEquipmentDto } from "./create-customer-equipment.dto";

@InputType()
export class UpdateCustomerEquipmentDto extends PartialType(CreateCustomerEquipmentDto) {
  
}