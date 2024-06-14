import { TransactionUpdateManyWithoutBuyersInput } from "./TransactionUpdateManyWithoutBuyersInput";

export type BuyerUpdateInput = {
  address?: string | null;
  contactInformation?: string | null;
  name?: string | null;
  transactions?: TransactionUpdateManyWithoutBuyersInput;
};
