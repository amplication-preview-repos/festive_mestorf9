import * as graphql from "@nestjs/graphql";
import { CowResolverBase } from "./base/cow.resolver.base";
import { Cow } from "./base/Cow";
import { CowService } from "./cow.service";

@graphql.Resolver(() => Cow)
export class CowResolver extends CowResolverBase {
  constructor(protected readonly service: CowService) {
    super(service);
  }
}
