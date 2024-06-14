import { Buyer } from "../buyer/Buyer";
import { Cow } from "../cow/Cow";
import { Seller } from "../seller/Seller";

export type Transaction = {
  amount: number | null;
  buyer?: Buyer | null;
  cow?: Cow | null;
  createdAt: Date;
  date: Date | null;
  id: string;
  seller?: Seller | null;
  updatedAt: Date;
};
