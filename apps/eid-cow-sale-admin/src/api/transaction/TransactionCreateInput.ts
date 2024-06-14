import { BuyerWhereUniqueInput } from "../buyer/BuyerWhereUniqueInput";
import { CowWhereUniqueInput } from "../cow/CowWhereUniqueInput";
import { SellerWhereUniqueInput } from "../seller/SellerWhereUniqueInput";

export type TransactionCreateInput = {
  amount?: number | null;
  buyer?: BuyerWhereUniqueInput | null;
  cow?: CowWhereUniqueInput | null;
  date?: Date | null;
  seller?: SellerWhereUniqueInput | null;
};
