import { NextPage } from 'next';
import { H1, FormGroup, Radio, Paragraph, Caption, Button } from 'govuk-react';
import { DisplayInputField } from '../../../../../components/display-input-field';
import { BaseTaskPage } from '../../../../../components/base-task-page';
import {
  CaptionWrapper,
  ButtonWrapper,
} from '../../../../../components/form-pages/styled-components';
import { Form, Field } from 'react-final-form';
import { useRouter } from 'next/router';
import { useState } from 'react';

const EWCCodeSummary: NextPage = () => {
    const router = useRouter();
    const [anotherEWCCode, setAnotherEWCCode] = useState(false);
  
    return (
       <>

        {/* Insert summary list component, where rows are EWC codes + change and remove links */}

      <BaseTaskPage
        backHref="/submit-an-export/about-the-waste/waste-codes-descriptions/ewc-code-radio"
        component={
          <Form
            onSubmit={(formObj) => {
              console.log(formObj);
              const routerUrl = anotherEWCCode
                ? '/submit-an-export/about-the-waste/waste-codes-descriptions/ewc-code-summary/ewc-code-input'
                : '/submit-an-export/about-the-waste/waste-codes-descriptions/national-code-radio';
              router.push(routerUrl);
            }}
          >
            {({ handleSubmit }) => (
              <FormGroup>
                <form onSubmit={handleSubmit}>
                  <H1 size="MEDIUM">Do you need to add another EWC code?</H1>
                  <Field name="ewc-code-radio" type="radio" value="yes">
                    {({ input }) => (
                      <Radio
                        {...input}
                        onClick={() => {
                          setAnotherEWCCode(true);
                        }}
                        inline
                      >
                        Yes
                      </Radio>
                    )}
                  </Field>
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
                          setAnotherEWCCode(false);
                        }}
                        inline
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
      </> 
    );
}

export default EWCCodeSummary;