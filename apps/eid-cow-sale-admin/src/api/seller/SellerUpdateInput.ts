import { TransactionUpdateManyWithoutSellersInput } from "./TransactionUpdateManyWithoutSellersInput";

export type SellerUpdateInput = {
  address?: string | null;
  contactInformation?: string | null;
  name?: string | null;
  transactions?: TransactionUpdateManyWithoutSellersInput;
};
