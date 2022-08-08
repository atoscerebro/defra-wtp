import { NextPage } from 'next';
import { H1, FormGroup, Button, InputField } from 'govuk-react';
import { BaseTaskPage } from '../../../../../../components/base-task-page';
import { ButtonWrapper } from '../../../../../../components/form-pages/styled-components';
import { Form, Field } from 'react-final-form';
import { useRouter } from 'next/router';
import { EWCInputCaption } from './styled-component';

const EWCCodeInput: NextPage = () => {
  const router = useRouter();

  return (
    <BaseTaskPage
      component={
        <Form
          onSubmit={(formObj) => {
            console.log(formObj);
            router.push(
              '/submit-an-export/about-the-waste/waste-codes-descriptions/ewc-code-summary',
            );
          }}
        >
          {({ handleSubmit }) => (
            <FormGroup>
              <form onSubmit={handleSubmit}>
                <H1 size="LARGE">Enter an EWC code?</H1>
                <Field name="ewc-code-input">
                  {({ input }) => (
                    <InputField {...input}>
                      <EWCInputCaption size="M">
                        Start typing a code, then choose from the list
                      </EWCInputCaption>
                    </InputField>
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

export default EWCCodeInput;
