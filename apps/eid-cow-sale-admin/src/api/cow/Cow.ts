import { Transaction } from "../transaction/Transaction";

export type Cow = {
  age: number | null;
  breed: string | null;
  createdAt: Date;
  id: string;
  name: string | null;
  price: number | null;
  transactions?: Array<Transaction>;
  updatedAt: Date;
  weight: number | null;
};
