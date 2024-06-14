import { Module } from "@nestjs/common";
import { CowModuleBase } from "./base/cow.module.base";
import { CowService } from "./cow.service";
import { CowController } from "./cow.controller";
import { CowResolver } from "./cow.resolver";

@Module({
  imports: [CowModuleBase],
  controllers: [CowController],
  providers: [CowService, CowResolver],
  exports: [CowService],
})
export class CowModule {}
