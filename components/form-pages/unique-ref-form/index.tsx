import {
  FormGroup,
  Radio,
  H1,
  GridRow,
  GridCol,
  Button,
  Label,
  Input,
} from 'govuk-react';
import { Form, Field } from 'react-final-form';
import { useState } from 'react';
import { DisplayInputField } from '../../display-input-field';
import { ButtonWrapper } from './styled-components';
import { useRouter } from 'next/router';
import { RadiosConditional } from '../../radios-conditional';
import { type } from 'os';

const PRENOTIFY_ROUTE = '/submit-export-task-list';
export const UniqueRefForm = () => {
  const router = useRouter();
  const [usingOwnRef, setUsingOwnRef] = useState(false);

  const handleFormSubmit = () => {
    router.push(PRENOTIFY_ROUTE);
  };

  return (
    <GridRow>
      <GridCol setWidth="two-thirds">
        <Form onSubmit={(e) => handleFormSubmit()}>
          {({ handleSubmit }) => (
            <FormGroup>
              <form onSubmit={handleSubmit}>
                <H1 size="LARGE">
                  Do you want to add your own reference number to this export?
                </H1>
                <Field name="ref-number-answer" type="radio" value="yes">
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
                  <Field name="ref-number-input">
                    {({ input }) => (
                      <DisplayInputField
                        {...input}
                        label={'Enter your reference number'}
                      />
                    )}
                  </Field>
                )}
                <Field name="ref-number-answer" type="radio" value="no">
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
                {/* <Field name="ref-number-answer" type="radio" value="maybe">
                  {({ input }) => (
                    <RadiosConditional
                      {...input}
                      children={'Maybe'}
                      renderConditional={() => (
                        <DisplayInputField
                          label={'Enter your reference number'}
                        />
                      )}
                    />
                  )}
                </Field> */}
                {/* <Field name="quant-waste-answer" type="radio" value="yes">
                  {({ input }) => (
                    <RadiosConditional
                      {...input}
                      children="Yes"
                      renderConditional={() => (
                        <DisplayInputField
                          label={`Enter your reference number`}
                        />
                      )}
                    />
                  )}
                </Field> */}
                <Field name="ref-number-answer" type="radio" value="maybe">
                  {({ input }) => (
                    <RadiosConditional
                      {...input}
                      children="Maybe"
                      renderConditional={() => (
                        <DisplayInputField
                          body={
                            "You'll need to update this with actual details as soon as possible after submitting this export."
                          }
                          label={'Weight, in tonnes'}
                        />
                      )}
                    />
                  )}
                </Field>

                <ButtonWrapper>
                  <Button type="submit">Save and continue</Button>
                </ButtonWrapper>
              </form>
            </FormGroup>
          )}
        </Form>
      </GridCol>
    </GridRow>
  );
};
