import { SortOrder } from "../../util/SortOrder";

export type TransactionOrderByInput = {
  amount?: SortOrder;
  buyerId?: SortOrder;
  cowId?: SortOrder;
  createdAt?: SortOrder;
  date?: SortOrder;
  id?: SortOrder;
  sellerId?: SortOrder;
  updatedAt?: SortOrder;
};
