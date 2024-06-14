import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
} from "react-admin";

import { BuyerTitle } from "../buyer/BuyerTitle";
import { CowTitle } from "../cow/CowTitle";
import { SellerTitle } from "../seller/SellerTitle";

export const TransactionCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput label="amount" source="amount" />
        <ReferenceInput source="buyer.id" reference="Buyer" label="Buyer">
          <SelectInput optionText={BuyerTitle} />
        </ReferenceInput>
        <ReferenceInput source="cow.id" reference="Cow" label="Cow">
          <SelectInput optionText={CowTitle} />
        </ReferenceInput>
        <DateTimeInput label="date" source="date" />
        <ReferenceInput source="seller.id" reference="Seller" label="Seller">
          <SelectInput optionText={SellerTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
