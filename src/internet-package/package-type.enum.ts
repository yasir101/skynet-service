export enum PackageType {
  SILVER = 'silver',
  GOLD = 'gold',
}

import { registerEnumType } from "@nestjs/graphql";

registerEnumType(PackageType, {
  name: 'PackageType',
})