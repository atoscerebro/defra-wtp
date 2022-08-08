import { FormGroup, Radio, H1, GridRow, GridCol, Button } from 'govuk-react';
import { Form, Field } from 'react-final-form';
import { useState } from 'react';
import { DisplayInputField } from '../../display-input-field';
import { ButtonWrapper } from './styled-components';
import { useRouter } from 'next/router';
import { t } from 'i18next';

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
                <H1 size="LARGE">{t('greenListWasteOverview')}</H1>
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
