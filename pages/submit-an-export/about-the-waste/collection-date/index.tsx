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

const CollectionDate: NextPage = () => {
  const router = useRouter();
  const [knowCollectionDate, setKnowCollectionDate] = useState(false);

  return (
    <BaseTaskPage
      backHref="/submit-an-export/about-the-waste/quantity-of-waste"
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
                  Do you know when the waste will be collected?
                </H1>
                <CaptionWrapper>
                  <Caption size="M">
                    This must be on 11 July 2022 or after.
                  </Caption>
                </CaptionWrapper>
                <Field name="collection-date-radio" type="radio" value="yes">
                  {({ input }) => (
                    <Radio
                      {...input}
                      onClick={() => {
                        setKnowCollectionDate(true);
                      }}
                    >
                      Yes
                    </Radio>
                  )}
                </Field>
                {knowCollectionDate && (
                  <Field name="collection-date">
                    {({ input }) => (
                      <DateInputField {...input} label={'Enter the date'} />
                    )}
                  </Field>
                )}
                <Field
                  defaultValue="no"
                  name="collection-date-radio"
                  type="radio"
                  value="no"
                >
                  {({ input }) => (
                    <Radio
                      {...input}
                      onClick={() => {
                        setKnowCollectionDate(false);
                      }}
                    >
                      No, I&apos;ll enter an estimate
                    </Radio>
                  )}
                </Field>
                {!knowCollectionDate && (
                  <Field name="collection-date">
                    {({ input }) => (
                      <>
                        <DateInputField
                          {...input}
                          label={'Enter an estimate date'}
                          caption={`You'll need to update this with actual details assoon as possible after submitting this export.`}
                        />
                      </>
                    )}
                  </Field>
                )}
                <ButtonWrapper>
                  <Button type="submit">Save and continue</Button>
                </ButtonWrapper>
              </form>
            </FormGroup>
          )}
        </Form>
      }
    ></BaseTaskPage>
  );
};

export default CollectionDate;
