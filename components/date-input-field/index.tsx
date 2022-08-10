import { DateField, GridRow, GridCol, H1, Paragraph } from 'govuk-react';
import { t } from 'i18next';
import { useTranslation } from 'react-i18next';
import { TRANSLATION_KEYS } from '../../translations/constants';
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
            {props.date}
          </DateLabelWrapper>
        </DateField>
      </GridCol>
    </GridRow>
  );
};
