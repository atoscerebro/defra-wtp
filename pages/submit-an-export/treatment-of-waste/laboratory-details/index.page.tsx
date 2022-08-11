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
import { ContactForm } from '../../../../components/contact-form';
import { defaultKeys } from '../../../../components/contact-form/constants';
import { links } from '../constants';
import { LABORATORY_DETAILS_IDS, LABORATORY_DETAILS_LABELS } from './constants';
import { AccessibleAutocomplete } from '../../../../components/accessible-autocomplete/accessible-autocomplete';
import { countryList } from '../../../../components/form-pages/constants';
import { TRANSLATION_KEYS } from '../../../../translations/constants';
import { useTranslation } from 'react-i18next';
import { useMemo } from 'react';

const ImporterAddress = () => {
  const router = useRouter();
  const { t } = useTranslation();

  const handleSubmit = (data: any) => {
    console.log(data);
    router.push(links.disposalCode);
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
              <H2 size="LARGE">{t(TRANSLATION_KEYS.laboratoryDetails)}</H2>
              <FormGroup>
                <Field name={LABORATORY_DETAILS_IDS.LABORATORY_NAME}>
                  {({ input }) => (
                    <InputField {...input}>
                      {t(TRANSLATION_KEYS.laboratoryName)}
                    </InputField>
                  )}
                </Field>
              </FormGroup>
              <FormGroup>
                <Field name={LABORATORY_DETAILS_IDS.ADDRESS}>
                  {({ input }) => (
                    <TextArea {...input}>
                      {t(TRANSLATION_KEYS.address)}
                    </TextArea>
                  )}
                </Field>
              </FormGroup>
              <FormGroup>
                <Field name={LABORATORY_DETAILS_IDS.COUNTRY}>
                  {({ input }) => (
                    <AccessibleAutocomplete
                      {...input}
                      options={countryList}
                      hintText={t(
                        TRANSLATION_KEYS.wellAlsoUseThisAsTheImportingCountry,
                      )}
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
