/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { BuyerService } from "../buyer.service";
import { BuyerCreateInput } from "./BuyerCreateInput";
import { Buyer } from "./Buyer";
import { BuyerFindManyArgs } from "./BuyerFindManyArgs";
import { BuyerWhereUniqueInput } from "./BuyerWhereUniqueInput";
import { BuyerUpdateInput } from "./BuyerUpdateInput";
import { TransactionFindManyArgs } from "../../transaction/base/TransactionFindManyArgs";
import { Transaction } from "../../transaction/base/Transaction";
import { TransactionWhereUniqueInput } from "../../transaction/base/TransactionWhereUniqueInput";

export class BuyerControllerBase {
  constructor(protected readonly service: BuyerService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Buyer })
  async createBuyer(@common.Body() data: BuyerCreateInput): Promise<Buyer> {
    return await this.service.createBuyer({
      data: data,
      select: {
        address: true,
        contactInformation: true,
        createdAt: true,
        id: true,
        name: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Buyer] })
  @ApiNestedQuery(BuyerFindManyArgs)
  async buyers(@common.Req() request: Request): Promise<Buyer[]> {
    const args = plainToClass(BuyerFindManyArgs, request.query);
    return this.service.buyers({
      ...args,
      select: {
        address: true,
        contactInformation: true,
        createdAt: true,
        id: true,
        name: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Buyer })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async buyer(
    @common.Param() params: BuyerWhereUniqueInput
  ): Promise<Buyer | null> {
    const result = await this.service.buyer({
      where: params,
      select: {
        address: true,
        contactInformation: true,
        createdAt: true,
        id: true,
        name: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Buyer })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateBuyer(
    @common.Param() params: BuyerWhereUniqueInput,
    @common.Body() data: BuyerUpdateInput
  ): Promise<Buyer | null> {
    try {
      return await this.service.updateBuyer({
        where: params,
        data: data,
        select: {
          address: true,
          contactInformation: true,
          createdAt: true,
          id: true,
          name: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Buyer })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteBuyer(
    @common.Param() params: BuyerWhereUniqueInput
  ): Promise<Buyer | null> {
    try {
      return await this.service.deleteBuyer({
        where: params,
        select: {
          address: true,
          contactInformation: true,
          createdAt: true,
          id: true,
          name: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Get("/:id/transactions")
  @ApiNestedQuery(TransactionFindManyArgs)
  async findTransactions(
    @common.Req() request: Request,
    @common.Param() params: BuyerWhereUniqueInput
  ): Promise<Transaction[]> {
    const query = plainToClass(TransactionFindManyArgs, request.query);
    const results = await this.service.findTransactions(params.id, {
      ...query,
      select: {
        amount: true,

        buyer: {
          select: {
            id: true,
          },
        },

        cow: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        date: true,
        id: true,

        seller: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/transactions")
  async connectTransactions(
    @common.Param() params: BuyerWhereUniqueInput,
    @common.Body() body: TransactionWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      transactions: {
        connect: body,
      },
    };
    await this.service.updateBuyer({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/transactions")
  async updateTransactions(
    @common.Param() params: BuyerWhereUniqueInput,
    @common.Body() body: TransactionWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      transactions: {
        set: body,
      },
    };
    await this.service.updateBuyer({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/transactions")
  async disconnectTransactions(
    @common.Param() params: BuyerWhereUniqueInput,
    @common.Body() body: TransactionWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      transactions: {
        disconnect: body,
      },
    };
    await this.service.updateBuyer({
      where: params,
      data,
      select: { id: true },
    });
  }
}