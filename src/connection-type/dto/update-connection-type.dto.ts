import { InputType, PartialType } from "@nestjs/graphql";
import { CreateConnectionTypeDto } from "./create-connection-type.dto";

@InputType()
export class UpdateConnectionType extends PartialType(CreateConnectionTypeDto) {
  
}