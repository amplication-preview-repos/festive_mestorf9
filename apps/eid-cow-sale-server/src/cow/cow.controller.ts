import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CowService } from "./cow.service";
import { CowControllerBase } from "./base/cow.controller.base";

@swagger.ApiTags("cows")
@common.Controller("cows")
export class CowController extends CowControllerBase {
  constructor(protected readonly service: CowService) {
    super(service);
  }
}
