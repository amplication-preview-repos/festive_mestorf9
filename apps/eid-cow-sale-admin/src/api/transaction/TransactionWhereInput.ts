import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { BuyerWhereUniqueInput } from "../buyer/BuyerWhereUniqueInput";
import { CowWhereUniqueInput } from "../cow/CowWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { SellerWhereUniqueInput } from "../seller/SellerWhereUniqueInput";

export type TransactionWhereInput = {
  amount?: FloatNullableFilter;
  buyer?: BuyerWhereUniqueInput;
  cow?: CowWhereUniqueInput;
  date?: DateTimeNullableFilter;
  id?: StringFilter;
  seller?: SellerWhereUniqueInput;
};
