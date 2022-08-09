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
import { AccessibleAutocomplete } from '../../../../../components/accessible-autocomplete/accessible-autocomplete';
import { BaseTaskPage } from '../../../../../components/base-task-page';
import { links } from '../../../../submit-export-task-list/constants';
import { IMPORTER_ADDRESS_IDS, IMPORTER_ADDRESS_LABELS } from './constants';
import { countryList } from '../../../../../components/form-pages/constants';

const ImporterAddress = () => {
  const router = useRouter();

  const handleSubmit = (data: any) => {
    console.log(data);
    router.push(links.submitExportTaskList);
  };

  return (
    <BaseTaskPage
      component={
        <Form onSubmit={handleSubmit}>
          {({ handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <H2 size="LARGE">Who&apos;s the importer?</H2>
              <FormGroup>
                <Field name={IMPORTER_ADDRESS_IDS.ORGANISATION_NAME}>
                  {({ input }) => (
                    <InputField {...input}>
                      {IMPORTER_ADDRESS_LABELS.ORGANISATION_NAME}
                    </InputField>
                  )}
                </Field>
              </FormGroup>
              <FormGroup>
                <Field name={IMPORTER_ADDRESS_IDS.ADDRESS}>
                  {({ input }) => (
                    <TextArea {...input}>
                      {IMPORTER_ADDRESS_LABELS.ADDRESS}
                    </TextArea>
                  )}
                </Field>
              </FormGroup>
              <FormGroup>
                <Field name={IMPORTER_ADDRESS_IDS.COUNTRY}>
                  {({ input }) => (
                    <AccessibleAutocomplete
                      {...input}
                      options={countryList}
                      label={IMPORTER_ADDRESS_LABELS.COUNTRY}
                    />
                  )}
                </Field>
              </FormGroup>
              <FormGroup>
                <Fieldset>
                  <Fieldset.Legend>
                    <H3>Contact Details</H3>
                  </Fieldset.Legend>

                  <FormGroup>
                    <Field name={IMPORTER_ADDRESS_IDS.FULL_NAME}>
                      {({ input }) => (
                        <InputField {...input}>
                          {IMPORTER_ADDRESS_LABELS.FULL_NAME}
                        </InputField>
                      )}
                    </Field>
                  </FormGroup>
                  <FormGroup>
                    <Field name={IMPORTER_ADDRESS_IDS.EMAIL}>
                      {({ input }) => (
                        <InputField {...input}>
                          {IMPORTER_ADDRESS_LABELS.EMAIL}
                        </InputField>
                      )}
                    </Field>
                  </FormGroup>
                  <FormGroup>
                    <Field name={IMPORTER_ADDRESS_IDS.PHONE_NUMBER}>
                      {({ input }) => (
                        <InputField
                          {...input}
                          hint="Include the country code for international numbers."
                        >
                          {IMPORTER_ADDRESS_LABELS.PHONE_NUMBER}
                        </InputField>
                      )}
                    </Field>
                  </FormGroup>
                  <FormGroup>
                    <Field name={IMPORTER_ADDRESS_IDS.FAX_NUMBER}>
                      {({ input }) => (
                        <InputField
                          {...input}
                          hint="Include the country code for international numbers."
                        >
                          {IMPORTER_ADDRESS_LABELS.FAX_NUMBER}
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
