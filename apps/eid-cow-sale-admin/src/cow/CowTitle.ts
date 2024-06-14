import { Cow as TCow } from "../api/cow/Cow";

export const COW_TITLE_FIELD = "name";

export const CowTitle = (record: TCow): string => {
  return record.name?.toString() || String(record.id);
};
