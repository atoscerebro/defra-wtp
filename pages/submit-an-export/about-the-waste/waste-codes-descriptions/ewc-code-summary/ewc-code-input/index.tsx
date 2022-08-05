import { NextPage } from 'next';
import { H1, FormGroup, Radio, Paragraph, Caption, Button, InputField} from 'govuk-react';
import { DisplayInputField } from '../../../../../../components/display-input-field';
import { BaseTaskPage } from '../../../../../../components/base-task-page';
import {
  CaptionWrapper,
  ButtonWrapper,
} from '../../../../../../components/form-pages/styled-components';
import { Form, Field } from 'react-final-form';
import { useRouter } from 'next/router';
import { useState } from 'react';

const EWCCodeInput: NextPage = () => {
  const router = useRouter();
  const [usingEWCCode, setUsingEWCCode] = useState(false);

  return (
    <BaseTaskPage
      backHref="/submit-an-export/about-the-waste/waste-codes-descriptions"
      component={
        <Form
          onSubmit={(formObj) => {
            console.log(formObj);
            const routerUrl = usingEWCCode
              ? '/submit-an-export/about-the-waste/waste-codes-descriptions/ewc-code-summary'
              : '/submit-an-export/about-the-waste/waste-codes-descriptions/national-code-radio';
            router.push(routerUrl);
          }}
        >
          {({ handleSubmit }) => (
            <FormGroup>
              <form onSubmit={handleSubmit}>
                <H1 size="LARGE">Enter an EWC code?</H1>
                  <Field name="ewc-code-input">
                    {({ input }) => (
                    //   <DisplayInputField
                    //     {...input}
                    //     label={'Start typing, then chose from the list'}
                    //   />
                    <InputField {...input} >Start typing a code, then choose from the list</InputField>
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

export default EWCCodeInput;
