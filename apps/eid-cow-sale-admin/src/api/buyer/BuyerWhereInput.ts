import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { TransactionListRelationFilter } from "../transaction/TransactionListRelationFilter";

export type BuyerWhereInput = {
  address?: StringNullableFilter;
  contactInformation?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  transactions?: TransactionListRelationFilter;
};
