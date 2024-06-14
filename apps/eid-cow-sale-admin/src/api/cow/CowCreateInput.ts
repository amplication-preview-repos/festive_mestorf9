import { TransactionCreateNestedManyWithoutCowsInput } from "./TransactionCreateNestedManyWithoutCowsInput";

export type CowCreateInput = {
  age?: number | null;
  breed?: string | null;
  name?: string | null;
  price?: number | null;
  transactions?: TransactionCreateNestedManyWithoutCowsInput;
  weight?: number | null;
};
