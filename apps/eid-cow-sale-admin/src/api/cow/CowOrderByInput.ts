import { SortOrder } from "../../util/SortOrder";

export type CowOrderByInput = {
  age?: SortOrder;
  breed?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  price?: SortOrder;
  updatedAt?: SortOrder;
  weight?: SortOrder;
};
