import {
  GridCol,
  GridRow,
  Paragraph,
  InputField,
  LabelText,
  Fieldset,
  HintText,
} from 'govuk-react';
import { FC } from 'react';
import {
  UpdateLaterMsg,
  CollectionDateErrorMessage,
  DayMonthFieldWrapper,
} from './styled-components';
import { Field } from 'react-final-form';
import { useTranslation } from 'react-i18next';
import { TRANSLATION_KEYS } from '../../../../translations/constants';

interface IProps {
  updateLaterMsg?: boolean;
  errorMsg?: React.ReactNode;
}

export const CollectionDateInput: FC<IProps> = ({
  updateLaterMsg,
  errorMsg,
  ...input
}) => {
  const { t } = useTranslation();

  return (
    <GridRow>
      <GridCol setWidth="two-thirds">
        <UpdateLaterMsg>
          {updateLaterMsg && (
            <Paragraph>
              {
                t(
                  TRANSLATION_KEYS.youllNeedToUpdateThisWithActualDetailsAsSoonAsPossibleAfterSubmittingThisExport,
                ) as string
              }
            </Paragraph>
          )}
        </UpdateLaterMsg>
        {updateLaterMsg ? (
          <LabelText>{t(TRANSLATION_KEYS.enterAnEstimateDate)}</LabelText>
        ) : (
          <LabelText>{t(TRANSLATION_KEYS.enterTheDate)}</LabelText>
        )}
        <HintText>{t(TRANSLATION_KEYS.forExample2592022)}</HintText>
        <CollectionDateErrorMessage>{errorMsg}</CollectionDateErrorMessage>

        <GridRow>
          <GridCol setWidth="one-third">
            <Fieldset>
              <GridRow>
                <GridCol setWidth="one-third">
                  <DayMonthFieldWrapper>
                    <Field name="collection-date.day">
                      {({ input }) => (
                        <InputField {...input}>
                          {t(TRANSLATION_KEYS.day)}
                        </InputField>
                      )}
                    </Field>
                  </DayMonthFieldWrapper>
                </GridCol>
                <GridCol setWidth="one-third">
                  <DayMonthFieldWrapper>
                    <Field name="collection-date.month">
                      {({ input }) => (
                        <InputField {...input}>
                          {t(TRANSLATION_KEYS.month)}
                        </InputField>
                      )}
                    </Field>
                  </DayMonthFieldWrapper>
                </GridCol>
                <GridCol setWidth="one-half">
                  <Field name="collection-date.year">
                    {({ input }) => (
                      <InputField {...input}>
                        {t(TRANSLATION_KEYS.year)}
                      </InputField>
                    )}
                  </Field>
                </GridCol>
              </GridRow>
            </Fieldset>
          </GridCol>
        </GridRow>
      </GridCol>
    </GridRow>
  );
};
