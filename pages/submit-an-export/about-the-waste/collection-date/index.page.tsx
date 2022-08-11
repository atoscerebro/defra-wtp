import { NextPage } from 'next';
import { BaseTaskPage } from '../../../../components/base-task-page';
import { Form, Field } from 'react-final-form';
import {
  H1,
  FormGroup,
  Caption,
  Button,
  Link as GovUKLink,
} from 'govuk-react';
import { useRouter } from 'next/router';
import {
  CaptionWrapper,
  ButtonWrapper,
} from '../../../../components/form-pages/styled-components';
import { RadiosConditional } from '../../../../components/radios-conditional';
import { CollectionDateInput } from './collection-date-input';

const CollectionDate: NextPage = () => {
  const router = useRouter();

  const invalidDate = new Date(2022, 6, 10)
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
                  Do you know when the waste will be collected?
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
                        <Field name="collection-date" validate={validateCollectionDate}>
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
                        <Field name="collection-date" validate={validateCollectionDate}>
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
