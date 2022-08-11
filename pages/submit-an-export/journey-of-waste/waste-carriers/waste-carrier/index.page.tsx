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
import { useRouter } from 'next/router';
import { Form, Field } from 'react-final-form';
import { AccessibleAutocomplete } from '../../../../../components/accessible-autocomplete/accessible-autocomplete';
import { BaseTaskPage } from '../../../../../components/base-task-page';
import { countryList } from '../../../../../components/form-pages/constants';
import { ContactForm } from '../../../../../components/contact-form';
import { links } from '../../constants';
import { WASTE_CARRIERS_IDS } from './constants';
import { TRANSLATION_KEYS } from '../../../../../translations/constants';
import { useTranslation } from 'react-i18next';
import { defaultKeys } from '../../../../../components/contact-form/constants';
import { useMemo } from 'react';

const WasteCarrier = () => {
  const router = useRouter();
  const { t } = useTranslation();

  const handleSubmit = (data: any) => {
    console.log(data);
    router.push(links.wasteCarrierTransport);
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
              <H2 size="LARGE">{t(TRANSLATION_KEYS.whoIsTheWasteCarrier)}</H2>
              <Paragraph>
                {
                  t(
                    TRANSLATION_KEYS.youllBeAbleToUpdateTheseDetailsAfterSubmittingThisExport,
                  ) as string
                }
              </Paragraph>
              <FormGroup>
                <Field name={WASTE_CARRIERS_IDS.ORGANISATION_NAME}>
                  {({ input }) => (
                    <InputField {...input}>
                      {t(TRANSLATION_KEYS.organisationName)}
                    </InputField>
                  )}
                </Field>
              </FormGroup>
              <FormGroup>
                <Field name={WASTE_CARRIERS_IDS.ADDRESS}>
                  {({ input }) => (
                    <TextArea {...input}>
                      {t(TRANSLATION_KEYS.address)}
                    </TextArea>
                  )}
                </Field>
              </FormGroup>
              <FormGroup>
                <Field name={WASTE_CARRIERS_IDS.COUNTRY}>
                  {({ input }) => (
                    <>
                      <AccessibleAutocomplete
                        {...input}
                        options={countryList}
                        label={t(TRANSLATION_KEYS.country)}
                      />
                    </>
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

export default WasteCarrier;
