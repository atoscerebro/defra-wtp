import {
  Button,
  Fieldset,
  FormGroup,
  H2,
  H3,
  InputField,
  Paragraph,
  TextArea,
} from 'govuk-react';
import { Form, Field } from 'react-final-form';
import { BaseTaskPage } from '../../base-task-page';
import { WASTE_CARRIERS_IDS, WASTE_CARRIERS_LABELS } from './constants';

export const WasteCarriersForm = () => {
  const handleSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <BaseTaskPage
      component={
        <Form onSubmit={handleSubmit}>
          {({ handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <H2 size="LARGE">Who is the first waste carrier?</H2>
              <Paragraph>
                You&apos;ll be able to update these details after submitting
                this export.
              </Paragraph>
              <FormGroup>
                <Field name={WASTE_CARRIERS_IDS.ORGANISATION_NAME}>
                  {({ input }) => (
                    <InputField {...input}>
                      {WASTE_CARRIERS_LABELS.ORGANISATION_NAME}
                    </InputField>
                  )}
                </Field>
              </FormGroup>
              <FormGroup>
                <Field name={WASTE_CARRIERS_IDS.ADDRESS}>
                  {({ input }) => (
                    <TextArea {...input}>
                      {WASTE_CARRIERS_LABELS.ADDRESS}
                    </TextArea>
                  )}
                </Field>
              </FormGroup>
              <FormGroup>
                <Field name={WASTE_CARRIERS_IDS.COUNTRY}>
                  {({ input }) => (
                    <InputField {...input}>
                      {WASTE_CARRIERS_LABELS.COUNTRY}
                    </InputField>
                  )}
                </Field>
              </FormGroup>
              <FormGroup>
                <Fieldset>
                  <Fieldset.Legend>
                    <H3>Contact Details</H3>
                  </Fieldset.Legend>
                  <FormGroup>
                    <Field name={WASTE_CARRIERS_IDS.FULL_NAME}>
                      {({ input }) => (
                        <InputField {...input}>
                          {WASTE_CARRIERS_LABELS.FULL_NAME}
                        </InputField>
                      )}
                    </Field>
                  </FormGroup>
                  <FormGroup>
                    <Field name={WASTE_CARRIERS_IDS.EMAIL_ADDRESS}>
                      {({ input }) => (
                        <InputField {...input}>
                          {WASTE_CARRIERS_LABELS.EMAIL_ADDRESS}
                        </InputField>
                      )}
                    </Field>
                  </FormGroup>
                  <FormGroup>
                    <Field name={WASTE_CARRIERS_IDS.PHONE_NUMBER}>
                      {({ input }) => (
                        <InputField
                          {...input}
                          input={{ type: 'tel' }}
                          hint="Include the country code for international numbers."
                        >
                          {WASTE_CARRIERS_LABELS.PHONE_NUMBER}
                        </InputField>
                      )}
                    </Field>
                  </FormGroup>
                  <FormGroup>
                    <Field name={WASTE_CARRIERS_IDS.FAX_NUMBER}>
                      {({ input }) => (
                        <InputField
                          {...input}
                          input={{ type: 'tel' }}
                          hint="Include the country code for international numbers."
                        >
                          {WASTE_CARRIERS_LABELS.FAX_NUMBER}
                        </InputField>
                      )}
                    </Field>
                  </FormGroup>
                </Fieldset>
              </FormGroup>
              <div>
                <Button>Save and continue</Button>
              </div>
            </form>
          )}
        </Form>
      }
    />
  );
};