import { Transaction } from "../transaction/Transaction";

export type Buyer = {
  address: string | null;
  contactInformation: string | null;
  createdAt: Date;
  id: string;
  name: string | null;
  transactions?: Array<Transaction>;
  updatedAt: Date;
};
