import { TransactionUpdateManyWithoutCowsInput } from "./TransactionUpdateManyWithoutCowsInput";

export type CowUpdateInput = {
  age?: number | null;
  breed?: string | null;
  name?: string | null;
  price?: number | null;
  transactions?: TransactionUpdateManyWithoutCowsInput;
  weight?: number | null;
};
