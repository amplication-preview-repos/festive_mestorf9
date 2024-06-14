import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  ReferenceField,
  DateField,
} from "react-admin";
import { BUYER_TITLE_FIELD } from "../buyer/BuyerTitle";
import { COW_TITLE_FIELD } from "../cow/CowTitle";
import { SELLER_TITLE_FIELD } from "../seller/SellerTitle";

export const TransactionShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="amount" source="amount" />
        <ReferenceField label="Buyer" source="buyer.id" reference="Buyer">
          <TextField source={BUYER_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField label="Cow" source="cow.id" reference="Cow">
          <TextField source={COW_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="createdAt" label="Created At" />
        <TextField label="date" source="date" />
        <TextField label="ID" source="id" />
        <ReferenceField label="Seller" source="seller.id" reference="Seller">
          <TextField source={SELLER_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
