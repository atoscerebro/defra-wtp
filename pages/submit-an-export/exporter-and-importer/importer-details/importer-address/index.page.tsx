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
import { ContactForm } from '../../../../../components/contact-form';
import { links } from '../../../../submit-export-task-list/constants';
import { IMPORTER_ADDRESS_IDS, IMPORTER_ADDRESS_LABELS } from './constants';
import { countryList } from '../../../../../components/form-pages/constants';
import { TRANSLATION_KEYS } from '../../../../../translations/constants';
import { useTranslation } from 'react-i18next';
import { defaultKeys } from '../../../../../components/contact-form/constants';
import { useMemo } from 'react';

const ImporterAddress = () => {
  const router = useRouter();
  const { t } = useTranslation();

  const handleSubmit = (data: any) => {
    console.log(data);
    router.push(links.submitExportTaskList);
  };

  const translatedLabels: typeof defaultKeys = useMemo(
    () => ({
      fullName: t(defaultKeys.fullName),
      phoneNumber: t(defaultKeys.phoneNumber),
      emailAddress: t(defaultKeys.emailAddress),
      faxNumberOptional: t(defaultKeys.faxNumberOptional),
    }),
    [t],
  );

  return (
    <BaseTaskPage
      component={
        <Form onSubmit={handleSubmit}>
          {({ handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <H2 size="LARGE">{t(TRANSLATION_KEYS.whosTheImporter)}</H2>
              <FormGroup>
                <Field name={IMPORTER_ADDRESS_IDS.ORGANISATION_NAME}>
                  {({ input }) => (
                    <InputField {...input}>
                      {t(TRANSLATION_KEYS.organisationName)}
                    </InputField>
                  )}
                </Field>
              </FormGroup>
              <FormGroup>
                <Field name={IMPORTER_ADDRESS_IDS.ADDRESS}>
                  {({ input }) => (
                    <TextArea {...input}>
                      {t(TRANSLATION_KEYS.address)}
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
                      label={t(TRANSLATION_KEYS.country)}
                    />
                  )}
                </Field>
              </FormGroup>
              <FormGroup>
                <Fieldset>
                  <Fieldset.Legend>
                    <H3>{t(TRANSLATION_KEYS.contactDetails)}</H3>
                  </Fieldset.Legend>
                  <ContactForm
                    labels={translatedLabels}
                    hints={{
                      phone: t(
                        TRANSLATION_KEYS.includeTheCountryCodeForInternationalNumbers,
                      ),
                      fax: t(
                        TRANSLATION_KEYS.includeTheCountryCodeForInternationalNumbers,
                      ),
                    }}
                  />
                </Fieldset>
              </FormGroup>
              <div>
                <Button>{t(TRANSLATION_KEYS.saveAndContinue)}</Button>
              </div>
            </form>
          )}
        </Form>
      }
    />
  );
};

export default ImporterAddress;
