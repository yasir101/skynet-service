import { InputType, PartialType } from "@nestjs/graphql";
import { CreateSubscriptionDto } from "./create-subscription.dto";

@InputType()
export class UpdateSuscriptionDto extends PartialType(CreateSubscriptionDto) {}
