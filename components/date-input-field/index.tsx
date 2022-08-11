import { DateField, GridRow, GridCol, H1, Paragraph, Input } from 'govuk-react';
import { DateLabelWrapper, DateLabelHeadingWrapper } from './styled-components';
import { Field } from 'react-final-form';

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
            {props.date}
          </DateLabelWrapper>
        </DateField>
      </GridCol>
    </GridRow>
  );
};
