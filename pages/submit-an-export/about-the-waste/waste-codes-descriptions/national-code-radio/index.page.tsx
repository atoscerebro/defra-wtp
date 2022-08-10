import { NextPage } from 'next';
import {
  FormGroup,
  Radio,
  H1,
  Button,
  GridRow,
  GridCol,
  Paragraph,
  LeadParagraph,
  Caption,
  InputField,
} from 'govuk-react';
import { Main } from 'govuk-react';
import { useState } from 'react';
import { Form, Field } from 'react-final-form';
import { useRouter } from 'next/router';
import { ButtonWrapper } from '../../../../../components/form-pages/styled-components';
import { NationalCodeInputCaption } from './styled-components';
import { BaseTaskPage } from '../../../../../components/base-task-page';
import { RadiosConditional } from '../../../../../components/radios-conditional';
import { TRANSLATION_KEYS } from '../../../../../translations/constants';
import { useTranslation } from 'react-i18next';

const NationalCodeRadio: NextPage = () => {
  const router = useRouter();
  const{t} = useTranslation();

  return (
    <BaseTaskPage
      component={
        <Form
          onSubmit={(formObj) => {
            console.log(formObj); //ref-number-answer: 'yes' or 'no'. (If 'yes') ref-number-input: 'reference number string'

            router.push(
              '/submit-an-export/about-the-waste/waste-codes-descriptions/describe-the-waste',
            );
          }}
        >
          {({ handleSubmit }) => (
            <FormGroup>
              <form onSubmit={handleSubmit}>
                <H1 size="LARGE">{t(TRANSLATION_KEYS.doYouHaveANationalCode)}</H1>
                <Paragraph>
                  {t(TRANSLATION_KEYS.aNationalCodeIsAlsoKnownAsACommodityCodeAndMayBeRequiredByTheCountryYoureExportingTo) as string}
                </Paragraph>
                <NationalCodeInputCaption size="M"> 
                {t(TRANSLATION_KEYS.itsNotRequiredByUkRegulators)}
                </NationalCodeInputCaption>
                <Field name="ref-number-answer" type="radio" value="yes">
                  {({ input }) => (
                    <RadiosConditional
                      {...input}
                      ariaId=""
                      id="national-code-input"
                      renderConditional={() => (
                        <InputField>{t(TRANSLATION_KEYS.enterCode)}</InputField>
                      )}
                    >
                      {t(TRANSLATION_KEYS.yes)}
                    </RadiosConditional>
                  )}
                </Field>
                <Field
                  defaultValue="no"
                  name="ref-number-answer"
                  type="radio"
                  value="no"
                >
                  {({ input }) => <Radio {...input}>{t(TRANSLATION_KEYS.no)}</Radio>}
                </Field>
                <ButtonWrapper>
                  <Button type="submit">{t(TRANSLATION_KEYS.saveAndContinue)}</Button>
                </ButtonWrapper>
              </form>
            </FormGroup>
          )}
        </Form>
      }
    />
  );
};

export default NationalCodeRadio;
