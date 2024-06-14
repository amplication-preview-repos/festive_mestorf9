import * as graphql from "@nestjs/graphql";
import { SellerResolverBase } from "./base/seller.resolver.base";
import { Seller } from "./base/Seller";
import { SellerService } from "./seller.service";

@graphql.Resolver(() => Seller)
export class SellerResolver extends SellerResolverBase {
  constructor(protected readonly service: SellerService) {
    super(service);
  }
}
