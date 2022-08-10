import { NextPage } from 'next';
import { BaseTaskPage } from '../../../../components/base-task-page';
import { Form, Field } from 'react-final-form';
import {
  H1,
  FormGroup,
  Radio,
  Caption,
  Button,
  Link as GovUKLink,
} from 'govuk-react';
import { useRouter } from 'next/router';
import { useState } from 'react';
import {
  CaptionWrapper,
  ButtonWrapper,
} from '../../../../components/form-pages/styled-components';
import { DateInputField } from '../../../../components/date-input-field';
import { RadiosConditional } from '../../../../components/radios-conditional';
import { t } from 'i18next';
import { TRANSLATION_KEYS } from '../../../../translations/constants';
import { useTranslation } from 'react-i18next';

const CollectionDate: NextPage = () => {
  const router = useRouter();
  const { t } = useTranslation();

  return (
    <BaseTaskPage
      component={
        <Form
          onSubmit={(formObj) => {
            console.log(formObj);
            router.push('/submit-export-task-list');
          }}
        >
          {({ handleSubmit }) => (
            <FormGroup>
              <form onSubmit={handleSubmit}>
                <H1 size="LARGE">
                  {t(TRANSLATION_KEYS.doYouKnowWhenTheWasteWillBeCollected)}
                </H1>
                <CaptionWrapper>
                  <Caption size="M">
                    {t(TRANSLATION_KEYS.thisMustBeOn11July2022OrAfter)}
                  </Caption>
                </CaptionWrapper>
                <Field name="collection-date-radio" type="radio" value="yes">
                  {({ input }) => (
                    <RadiosConditional
                      {...input}
                      ariaId=""
                      renderConditional={() => (
                        <Field name="collection-date">
                          {({ input }) => (
                            <DateInputField
                              {...input}
                              label={t(TRANSLATION_KEYS.enterTheDate)}
                            />
                          )}
                        </Field>
                      )}
                    >
                      {t(TRANSLATION_KEYS.yes)}
                    </RadiosConditional>
                  )}
                </Field>
                <Field
                  defaultValue="no"
                  name="collection-date-radio"
                  type="radio"
                  value="no"
                >
                  {({ input }) => (
                    <RadiosConditional
                      {...input}
                      ariaId=""
                      renderConditional={() => (
                        <DateInputField
                          {...input}
                          label={t(TRANSLATION_KEYS.enterAnEstimateDate)}
                          caption={t(
                            TRANSLATION_KEYS.youllNeedToUpdateThisWithActualDetailsAsSoonAsPossibleAfterSubmittingThisExport,
                          )}
                          date={t(TRANSLATION_KEYS.forExample2592022)}
                        />
                      )}
                    >
                      {t(TRANSLATION_KEYS.noIllEnterAnEstimate)}
                    </RadiosConditional>
                  )}
                </Field>
                <ButtonWrapper>
                  <Button type="submit">
                    {t(TRANSLATION_KEYS.saveAndContinue)}
                  </Button>
                </ButtonWrapper>
              </form>
            </FormGroup>
          )}
        </Form>
      }
    />
  );
};

export default CollectionDate;
