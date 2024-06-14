import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CowServiceBase } from "./base/cow.service.base";

@Injectable()
export class CowService extends CowServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
