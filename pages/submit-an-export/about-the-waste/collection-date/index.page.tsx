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
  const {t} = useTranslation();

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
                    This must be on 11 July 2022 or after.
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
                              label={'Enter the date'}
                            />
                          )}
                        </Field>
                      )}
                    >
                      Yes
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
                          label={'Enter an estimate date'}
                          caption={`You'll need to update this with actual details assoon as possible after submitting this export.`}
                        />
                      )}
                    >
                      No, I&apos;ll enter an estimate
                    </RadiosConditional>
                  )}
                </Field>
                <ButtonWrapper>
                  <Button type="submit">Save and continue</Button>
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
