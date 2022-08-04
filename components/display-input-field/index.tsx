import { FC } from 'react';
import { GridRow, GridCol, InputField } from 'govuk-react';
// import { DisplayInputFieldWrapper } from './styled-components';

export const DisplayInputField = ({ ...props }) => {
  return (
    // <GridRow>
    //   <GridCol setWidth="two-thirds">
    //     <DisplayInputFieldWrapper>
    <InputField {...props}>{props.label}</InputField>
    //     </DisplayInputFieldWrapper>
    //   </GridCol>
    // </GridRow>
  );
};
