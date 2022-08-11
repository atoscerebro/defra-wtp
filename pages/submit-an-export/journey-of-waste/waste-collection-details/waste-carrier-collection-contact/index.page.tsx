import {
  Button,
  Fieldset,
  FormGroup,
  H2,
  H3,
  HintText,
  InputField,
  Paragraph,
} from 'govuk-react';
import { Field, Form } from 'react-final-form';
import { LineBreak } from '../../../../../components/line-break';
import { BaseTaskPage } from '../../../../../components/base-task-page';
import {
  WASTE_CARRIER_COLLECT_DETAILS_IDS,
  WASTE_CARRIER_COLLECT_DETAILS_LABELS,
} from './constants';
import { Link } from '../../../../../components/link';
import { useRouter } from 'next/router';
import { links } from '../../constants';
import { ContactForm } from '../../../../../components/contact-form';
import { TRANSLATION_KEYS } from '../../../../../translations/constants';
import { useTranslation } from 'react-i18next';
import { defaultKeys } from '../../../../../components/contact-form/constants';
import { useMemo } from 'react';

const WasteCarrierCollectionContact = () => {
  const router = useRouter();
  const { t } = useTranslation();

  const handleSubmit = (data: any) => {
    console.log(data);
    router.push(links.wasteLeaveLocation);
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
              <H2 size="LARGE">{t(TRANSLATION_KEYS.wasteCollectionDetails)}</H2>
              <FormGroup>
                <LineBreak>
                  {['5 Stafford Park', 'Telford', 'TRF 3RT', 'UK']}
                </LineBreak>
              </FormGroup>
              <FormGroup>
                <HintText>
                  {t(TRANSLATION_KEYS.wellUseThisAsTheExportingCountry)}
                </HintText>
                <Link href={links.wasteCarrierCollectLocation}>
                  <Paragraph>
                    {t(TRANSLATION_KEYS.changeAddress) as string}
                  </Paragraph>
                </Link>
              </FormGroup>
              <FormGroup>
                <Field
                  name={WASTE_CARRIER_COLLECT_DETAILS_IDS.ORGANISATION_NAME}
                >
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

export default WasteCarrierCollectionContact;
