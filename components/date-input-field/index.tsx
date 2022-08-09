import { DateField, GridRow, GridCol, H1, Paragraph } from 'govuk-react';
import { DateLabelWrapper, DateLabelHeadingWrapper } from './styled-components';

export const DateInputField = ({ ...props }) => {
  return (
    <GridRow>
      <GridCol setWidth="two-thirds">
        <DateField {...props}>
          <DateLabelWrapper>
            <Paragraph>{props.caption}</Paragraph>
            <DateLabelHeadingWrapper size="SMALL">
              {props.label}
            </DateLabelHeadingWrapper>
            For example, 25 9 2022
          </DateLabelWrapper>
        </DateField>
      </GridCol>
    </GridRow>
  );
};
