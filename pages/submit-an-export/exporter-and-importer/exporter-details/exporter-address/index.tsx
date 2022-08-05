import { Button, FormGroup, H2, InputField } from 'govuk-react';
import { useRouter } from 'next/router';
import { Field, Form } from 'react-final-form';
import { BaseTaskPage } from '../../../../../components/base-task-page';
import { links } from '../constants';
import { EXPORTER_ADDRESS_IDS, EXPORTER_ADDRESS_LABELS } from './constants';

const ExporterAddress = () => {
  const router = useRouter();

  const handleSubmit = (data: any) => {
    console.log(data);
    router.push(links.exporterContact);
  };

  return (
    <BaseTaskPage
      component={
        <Form onSubmit={handleSubmit}>
          {({ handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <H2 size="LARGE">What&apos;s the exporter address?</H2>
              <FormGroup>
                <Field name={EXPORTER_ADDRESS_IDS.ADDRESS_1}>
                  {({ input }) => (
                    <InputField {...input}>
                      {EXPORTER_ADDRESS_LABELS.ADDRESS_1}
                    </InputField>
                  )}
                </Field>
              </FormGroup>
              <FormGroup>
                <Field name={EXPORTER_ADDRESS_IDS.ADDRESS_2}>
                  {({ input }) => (
                    <InputField {...input}>
                      {EXPORTER_ADDRESS_LABELS.ADDRESS_2}
                    </InputField>
                  )}
                </Field>
              </FormGroup>
              <FormGroup>
                <Field name={EXPORTER_ADDRESS_IDS.TOWN}>
                  {({ input }) => (
                    <InputField {...input}>
                      {EXPORTER_ADDRESS_LABELS.TOWN}
                    </InputField>
                  )}
                </Field>
              </FormGroup>
              <FormGroup>
                <Field name={EXPORTER_ADDRESS_IDS.POSTCODE}>
                  {({ input }) => (
                    <InputField {...input}>
                      {EXPORTER_ADDRESS_LABELS.POSTCODE}
                    </InputField>
                  )}
                </Field>
              </FormGroup>
              <FormGroup>
                <Field name={EXPORTER_ADDRESS_IDS.COUNTRY}>
                  {({ input }) => (
                    <InputField {...input}>
                      {EXPORTER_ADDRESS_LABELS.COUNTRY}
                    </InputField>
                  )}
                </Field>
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

export default ExporterAddress;
