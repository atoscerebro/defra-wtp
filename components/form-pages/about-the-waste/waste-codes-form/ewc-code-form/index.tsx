import { FormGroup, Radio, H1, Caption, Button } from 'govuk-react';
import { Form, Field } from 'react-final-form';
import { useState } from 'react';
import { DisplayInputField } from '../../../../display-input-field';
import { ButtonWrapper } from '../../../styled-components';
import { CaptionWrapper } from '../styled-components';
import { useRouter } from 'next/router';
import { BaseTaskPage } from '../../../../base-task-page';

export const EWCCodeForm = () => {
  const [usingOwnRef, setUsingOwnRef] = useState(false);
  const router = useRouter();
  return (
    <BaseTaskPage
      backHref="/submit-an-export/about-the-waste/waste-codes-descriptions"
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
                  Do you have an EWC code?
                </H1>
                <CaptionWrapper>
                      <Caption size="M">An EWC code (European Waste Catalogue code) is also known as an EC list of waste.</Caption>
                    </CaptionWrapper>
                <Field name="ewc-code-radio" type="radio" value="yes">
                  {({ input }) => (
                    <Radio
                      {...input}
                      onClick={() => {
                        setUsingOwnRef(true);
                      }}
                    >
                      Yes
                    </Radio>
                  )}
                </Field>
                {usingOwnRef && (
                  <Field name="ewc-code-input">
                    {({ input }) => (
                      <DisplayInputField
                        {...input}
                        label={'Start typing, then chose from the list'}
                      />
                    )}
                  </Field>
                )}
                <Field
                  defaultValue="no"
                  name="ewc-code-radio"
                  type="radio"
                  value="no"
                >
                  {({ input }) => (
                    <Radio
                      {...input}
                      onClick={() => {
                        setUsingOwnRef(false);
                      }}
                    >
                      No
                    </Radio>
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
    ></BaseTaskPage>
  );
};
