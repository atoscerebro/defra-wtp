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
import { useTranslation } from 'react-i18next';
import { BaseTaskPage } from '../../../../../components/base-task-page';
import { ContactForm } from '../../../../../components/contact-form';
import { defaultKeys } from '../../../../../components/contact-form/constants';
import { LineBreak } from '../../../../../components/line-break';
import { TRANSLATION_KEYS } from '../../../../../translations/constants';
import { links } from '../../constants';
import { EXPORTER_CONTACT_IDS, EXPORTER_CONTACT_LABELS } from './constants';
import React, { useMemo } from 'react';

const ExporterContact = () => {
  const router = useRouter();
  const { t } = useTranslation();

  const handleSubmit = (data: any) => {
    console.log(data);
    router.push(links.importerAddress);
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
              <H2 size="LARGE">{t(TRANSLATION_KEYS.exportersDetails)}</H2>
              <FormGroup>
                <LineBreak>
                  {['5 Stafford Park', 'Telford', 'TRF 3RT', 'UK']}
                </LineBreak>
              </FormGroup>
              <FormGroup>
                <Link href={links.exporterAddress}>
                  <Paragraph>
                    {t(TRANSLATION_KEYS.changeAddress) as string}
                  </Paragraph>
                </Link>
              </FormGroup>
              <FormGroup>
                <Field name={EXPORTER_CONTACT_IDS.ORGANISATION_NAME}>
                  {({ input }) => (
                    <InputField {...input}>
                      {t(TRANSLATION_KEYS.organisationName)}
                    </InputField>
                  )}
                </Field>
              </FormGroup>
              <FormGroup>
                <Fieldset>
                  <Fieldset.Legend>
                    <H3>{t(TRANSLATION_KEYS.contactDetails)}</H3>
                  </Fieldset.Legend>
                  <ContactForm labels={translatedLabels} />
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

export default ExporterContact;
