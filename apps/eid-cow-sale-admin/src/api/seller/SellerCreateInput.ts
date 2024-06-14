import { TransactionCreateNestedManyWithoutSellersInput } from "./TransactionCreateNestedManyWithoutSellersInput";

export type SellerCreateInput = {
  address?: string | null;
  contactInformation?: string | null;
  name?: string | null;
  transactions?: TransactionCreateNestedManyWithoutSellersInput;
};
