import { FC } from 'react';
import { GridRow, GridCol, InputField } from 'govuk-react';
import { DisplayInputFieldWrapper } from './styled-components';

export const DisplayInputField = ({ ...props }) => {
  return (
    <GridRow>
      <GridCol setWidth="two-thirds">
        <InputField {...props}>{props.label}</InputField>
      </GridCol>
    </GridRow>
  );
};
