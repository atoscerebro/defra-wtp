import { DateField, GridRow, GridCol, H1, Paragraph } from 'govuk-react';
import { DisplayInputFieldWrapper } from '../display-input-field/styled-components';
import { DateLabelWrapper, DateLabelHeadingWrapper } from './styled-components';

export const DateInputField = ({ ...props }) => {
  return (
    <GridRow>
      <GridCol setWidth="two-thirds">
        <DisplayInputFieldWrapper>
          <DateField {...props}>
            <DateLabelWrapper>
              <Paragraph>{props.caption}</Paragraph>
              <DateLabelHeadingWrapper size="SMALL">
                {props.label}
              </DateLabelHeadingWrapper>
              For example, 25 9 2022
            </DateLabelWrapper>
          </DateField>
        </DisplayInputFieldWrapper>
      </GridCol>
    </GridRow>
  );
};
