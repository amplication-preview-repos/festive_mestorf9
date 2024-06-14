/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  Buyer as PrismaBuyer,
  Transaction as PrismaTransaction,
} from "@prisma/client";

export class BuyerServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.BuyerCountArgs, "select">): Promise<number> {
    return this.prisma.buyer.count(args);
  }

  async buyers<T extends Prisma.BuyerFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.BuyerFindManyArgs>
  ): Promise<PrismaBuyer[]> {
    return this.prisma.buyer.findMany<Prisma.BuyerFindManyArgs>(args);
  }
  async buyer<T extends Prisma.BuyerFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.BuyerFindUniqueArgs>
  ): Promise<PrismaBuyer | null> {
    return this.prisma.buyer.findUnique(args);
  }
  async createBuyer<T extends Prisma.BuyerCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.BuyerCreateArgs>
  ): Promise<PrismaBuyer> {
    return this.prisma.buyer.create<T>(args);
  }
  async updateBuyer<T extends Prisma.BuyerUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.BuyerUpdateArgs>
  ): Promise<PrismaBuyer> {
    return this.prisma.buyer.update<T>(args);
  }
  async deleteBuyer<T extends Prisma.BuyerDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.BuyerDeleteArgs>
  ): Promise<PrismaBuyer> {
    return this.prisma.buyer.delete(args);
  }

  async findTransactions(
    parentId: string,
    args: Prisma.TransactionFindManyArgs
  ): Promise<PrismaTransaction[]> {
    return this.prisma.buyer
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .transactions(args);
  }
}
