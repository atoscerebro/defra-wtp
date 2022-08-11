import { NextPage } from 'next';
import { BaseTaskPage } from '../../../../components/base-task-page';
import { Form, Field } from 'react-final-form';
import { H1, FormGroup, Caption, Button, Link as GovUKLink } from 'govuk-react';
import { useRouter } from 'next/router';
import {
  CaptionWrapper,
  ButtonWrapper,
} from '../../../../components/form-pages/styled-components';
import { RadiosConditional } from '../../../../components/radios-conditional';
import { t } from 'i18next';
import { TRANSLATION_KEYS } from '../../../../translations/constants';
import { useTranslation } from 'react-i18next';
import { CollectionDateInput } from './collection-date-input';

const CollectionDate: NextPage = () => {
  const router = useRouter();
  const { t } = useTranslation();

  const invalidDate = new Date(2022, 6, 10);
  const validateCollectionDate: (value?: {
    year?: number | string;
    month?: number | string;
    day?: number | string;
  }) => string | undefined = (value) => {
    if (value && value.year && value.month && value.day) {
      const year = Number(value.year);
      const month = Number(value.month) - 1;
      const day = Number(value.day);
      const valueDate = new Date(year, month, day);
      if (
        // Is after the invalid date
        valueDate > invalidDate &&
        // and a real date resolves to the inputted date (e.g. month is not 13, not 29th February on a non leap year)
        valueDate.getFullYear() === year &&
        valueDate.getMonth() === month &&
        valueDate.getDate() === day
      ) {
        return undefined;
      }
    }
    return 'Please enter a valid date';
  };

  return (
    <BaseTaskPage
      component={
        <Form
          onSubmit={(formObj) => {
            console.log(formObj);
            console.log(formObj['collection-date']);

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
                        <Field
                          name="collection-date"
                          validate={validateCollectionDate}
                        >
                          {({ input, meta }) => (
                            <CollectionDateInput
                              updateLaterMsg={false}
                              errorMsg={meta.error && <>{meta.error}</>}
                              {...input}
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
                        <Field
                          name="collection-date"
                          validate={validateCollectionDate}
                        >
                          {({ input, meta }) => (
                            <CollectionDateInput
                              updateLaterMsg={true}
                              errorMsg={meta.error && <>{meta.error}</>}
                              {...input}
                            />
                          )}
                        </Field>
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
