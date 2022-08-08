import {
  Button,
  Fieldset,
  FormGroup,
  H2,
  H3,
  InputField,
  TextArea,
} from 'govuk-react';
import { useRouter } from 'next/router';
import { Field, Form } from 'react-final-form';
import { BaseTaskPage } from '../../../../components/base-task-page';
import { links } from '../constants';
import { LABORATORY_DETAILS_IDS, LABORATORY_DETAILS_LABELS } from './constants';

const ImporterAddress = () => {
  const router = useRouter();

  const handleSubmit = (data: any) => {
    console.log(data);
    router.push(links.disposalCode);
  };

  return (
    <BaseTaskPage
      component={
        <Form onSubmit={handleSubmit}>
          {({ handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <H2 size="LARGE">Laboratory Details</H2>
              <FormGroup>
                <Field name={LABORATORY_DETAILS_IDS.LABORATORY_NAME}>
                  {({ input }) => (
                    <InputField {...input}>
                      {LABORATORY_DETAILS_LABELS.LABORATORY_NAME}
                    </InputField>
                  )}
                </Field>
              </FormGroup>
              <FormGroup>
                <Field name={LABORATORY_DETAILS_IDS.ADDRESS}>
                  {({ input }) => (
                    <TextArea {...input}>
                      {LABORATORY_DETAILS_LABELS.ADDRESS}
                    </TextArea>
                  )}
                </Field>
              </FormGroup>
              <FormGroup>
                <Field name={LABORATORY_DETAILS_IDS.COUNTRY}>
                  {({ input }) => (
                    <InputField {...input}>
                      {LABORATORY_DETAILS_LABELS.COUNTRY}
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
                    <Field name={LABORATORY_DETAILS_IDS.FULL_NAME}>
                      {({ input }) => (
                        <InputField {...input}>
                          {LABORATORY_DETAILS_LABELS.FULL_NAME}
                        </InputField>
                      )}
                    </Field>
                  </FormGroup>
                  <FormGroup>
                    <Field name={LABORATORY_DETAILS_IDS.EMAIL}>
                      {({ input }) => (
                        <InputField {...input}>
                          {LABORATORY_DETAILS_LABELS.EMAIL}
                        </InputField>
                      )}
                    </Field>
                  </FormGroup>
                  <FormGroup>
                    <Field name={LABORATORY_DETAILS_IDS.PHONE_NUMBER}>
                      {({ input }) => (
                        <InputField
                          {...input}
                          hint="Include the country code for international numbers."
                        >
                          {LABORATORY_DETAILS_LABELS.PHONE_NUMBER}
                        </InputField>
                      )}
                    </Field>
                  </FormGroup>
                  <FormGroup>
                    <Field name={LABORATORY_DETAILS_IDS.FAX_NUMBER}>
                      {({ input }) => (
                        <InputField
                          {...input}
                          hint="Include the country code for international numbers."
                        >
                          {LABORATORY_DETAILS_LABELS.FAX_NUMBER}
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

export default ImporterAddress;
