import { CowWhereInput } from "./CowWhereInput";
import { CowOrderByInput } from "./CowOrderByInput";

export type CowFindManyArgs = {
  where?: CowWhereInput;
  orderBy?: Array<CowOrderByInput>;
  skip?: number;
  take?: number;
};
