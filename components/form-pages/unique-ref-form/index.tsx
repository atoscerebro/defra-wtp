import { FormGroup, Radio, H1, GridRow, GridCol, Button } from 'govuk-react';
import { Form, Field } from 'react-final-form';
import * as StyledComponents from './styled-components';
import { useRouter } from 'next/router';
import { RadiosConditional } from '../../radios-conditional';
import { TwoThirdsInputField } from '../../two-thirds-input-field/styled-components';

const PRENOTIFY_ROUTE = '/submit-export-task-list';
export const UniqueRefForm = () => {
  const router = useRouter();

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
                    <RadiosConditional
                      {...input}
                      id={'conditional-contact'}
                      renderConditional={() => (
                        <TwoThirdsInputField>
                          Enter your reference number
                        </TwoThirdsInputField>
                      )}
                    >
                      Yes
                    </RadiosConditional>
                  )}
                </Field>
                <Field name="ref-number-answer" type="radio" value="no">
                  {({ input }) => <Radio {...input}>No</Radio>}
                </Field>
                <StyledComponents.ButtonWrapper>
                  <Button type="submit">Save and continue</Button>
                </StyledComponents.ButtonWrapper>
              </form>
            </FormGroup>
          )}
        </Form>
      </GridCol>
    </GridRow>
  );
};
