import {
  Button,
  Fieldset,
  FormGroup,
  H2,
  H3,
  InputField,
  Link,
  Paragraph,
} from 'govuk-react';
import { useRouter } from 'next/router';
import { Field, Form } from 'react-final-form';
import { BaseTaskPage } from '../../../../../components/base-task-page';
import { LineBreak } from '../../../../../components/line-break';
import { links } from '../constants';
import { links as importerLinks } from '../../importer-details/constants';
import { EXPORTER_CONTACT_IDS, EXPORTER_CONTACT_LABELS } from './constants';

const ExporterContact = () => {
  const router = useRouter();

  const handleSubmit = (data: any) => {
    console.log(data);
    router.push(importerLinks.importerAddress);
  };

  return (
    <BaseTaskPage
      component={
        <Form onSubmit={handleSubmit}>
          {({ handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <H2 size="LARGE">Exporter&apos;s details</H2>
              <FormGroup>
                <LineBreak>
                  {['5 Stafford Park', 'Telford', 'TRF 3RT', 'UK']}
                </LineBreak>
              </FormGroup>
              <FormGroup>
                <Link href={links.exporterAddress}>
                  <Paragraph>Change address</Paragraph>
                </Link>
              </FormGroup>
              <FormGroup>
                <Field name={EXPORTER_CONTACT_IDS.ORGANISATION_NAME}>
                  {({ input }) => (
                    <InputField {...input}>
                      {EXPORTER_CONTACT_LABELS.ORGANISATION_NAME}
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
                    <Field name={EXPORTER_CONTACT_IDS.FULL_NAME}>
                      {({ input }) => (
                        <InputField {...input}>
                          {EXPORTER_CONTACT_LABELS.FULL_NAME}
                        </InputField>
                      )}
                    </Field>
                  </FormGroup>
                  <FormGroup>
                    <Field name={EXPORTER_CONTACT_IDS.EMAIL}>
                      {({ input }) => (
                        <InputField {...input}>
                          {EXPORTER_CONTACT_LABELS.EMAIL}
                        </InputField>
                      )}
                    </Field>
                  </FormGroup>
                  <FormGroup>
                    <Field name={EXPORTER_CONTACT_IDS.PHONE_NUMBER}>
                      {({ input }) => (
                        <InputField {...input}>
                          {EXPORTER_CONTACT_LABELS.PHONE_NUMBER}
                        </InputField>
                      )}
                    </Field>
                  </FormGroup>
                  <FormGroup>
                    <Field name={EXPORTER_CONTACT_IDS.FAX_NUMBER}>
                      {({ input }) => (
                        <InputField {...input}>
                          {EXPORTER_CONTACT_LABELS.FAX_NUMBER}
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

export default ExporterContact;
