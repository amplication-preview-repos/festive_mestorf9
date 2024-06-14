import { TransactionCreateNestedManyWithoutBuyersInput } from "./TransactionCreateNestedManyWithoutBuyersInput";

export type BuyerCreateInput = {
  address?: string | null;
  contactInformation?: string | null;
  name?: string | null;
  transactions?: TransactionCreateNestedManyWithoutBuyersInput;
};
