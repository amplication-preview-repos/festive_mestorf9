import { Seller as TSeller } from "../api/seller/Seller";

export const SELLER_TITLE_FIELD = "name";

export const SellerTitle = (record: TSeller): string => {
  return record.name?.toString() || String(record.id);
};
