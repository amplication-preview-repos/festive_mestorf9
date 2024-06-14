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
import { SellerService } from "../seller.service";
import { SellerCreateInput } from "./SellerCreateInput";
import { Seller } from "./Seller";
import { SellerFindManyArgs } from "./SellerFindManyArgs";
import { SellerWhereUniqueInput } from "./SellerWhereUniqueInput";
import { SellerUpdateInput } from "./SellerUpdateInput";
import { TransactionFindManyArgs } from "../../transaction/base/TransactionFindManyArgs";
import { Transaction } from "../../transaction/base/Transaction";
import { TransactionWhereUniqueInput } from "../../transaction/base/TransactionWhereUniqueInput";

export class SellerControllerBase {
  constructor(protected readonly service: SellerService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Seller })
  async createSeller(@common.Body() data: SellerCreateInput): Promise<Seller> {
    return await this.service.createSeller({
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
  @swagger.ApiOkResponse({ type: [Seller] })
  @ApiNestedQuery(SellerFindManyArgs)
  async sellers(@common.Req() request: Request): Promise<Seller[]> {
    const args = plainToClass(SellerFindManyArgs, request.query);
    return this.service.sellers({
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
  @swagger.ApiOkResponse({ type: Seller })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async seller(
    @common.Param() params: SellerWhereUniqueInput
  ): Promise<Seller | null> {
    const result = await this.service.seller({
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
  @swagger.ApiOkResponse({ type: Seller })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateSeller(
    @common.Param() params: SellerWhereUniqueInput,
    @common.Body() data: SellerUpdateInput
  ): Promise<Seller | null> {
    try {
      return await this.service.updateSeller({
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
  @swagger.ApiOkResponse({ type: Seller })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteSeller(
    @common.Param() params: SellerWhereUniqueInput
  ): Promise<Seller | null> {
    try {
      return await this.service.deleteSeller({
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
    @common.Param() params: SellerWhereUniqueInput
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
    @common.Param() params: SellerWhereUniqueInput,
    @common.Body() body: TransactionWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      transactions: {
        connect: body,
      },
    };
    await this.service.updateSeller({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/transactions")
  async updateTransactions(
    @common.Param() params: SellerWhereUniqueInput,
    @common.Body() body: TransactionWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      transactions: {
        set: body,
      },
    };
    await this.service.updateSeller({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/transactions")
  async disconnectTransactions(
    @common.Param() params: SellerWhereUniqueInput,
    @common.Body() body: TransactionWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      transactions: {
        disconnect: body,
      },
    };
    await this.service.updateSeller({
      where: params,
      data,
      select: { id: true },
    });
  }
}
