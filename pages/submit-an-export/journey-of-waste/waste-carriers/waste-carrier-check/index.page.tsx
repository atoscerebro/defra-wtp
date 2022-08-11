import {
  Button,
  Fieldset,
  FormGroup,
  H2,
  H3,
  HintText,
  Paragraph,
  Radio,
} from 'govuk-react';
import { useRouter } from 'next/router';
import { Field, Form } from 'react-final-form';
import { useTranslation } from 'react-i18next';
import { BaseTaskPage } from '../../../../../components/base-task-page';
import { TRANSLATION_KEYS } from '../../../../../translations/constants';
import { links } from '../../constants';
import {
  ADD_CARRIER_GROUP,
  WASTE_CARRIER_CHECK_IDS,
  WASTE_CARRIER_CHECK_LABELS,
} from './constants';

const WasteCarrierTransport = () => {
  const router = useRouter();
  const { t } = useTranslation();

  const handleSubmit = (data: any) => {
    const addCarrier = {
      yes: true,
      no: false,
    }[data['add-carrier'] as 'yes' | 'no'];

    router.push(
      addCarrier ? links.wasteCarrier : links.wasteCarrierCollectLocation,
    );
  };

  return (
    <BaseTaskPage
      component={
        <Form onSubmit={handleSubmit}>
          {({ handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <H2 size="LARGE">{t(TRANSLATION_KEYS.wasteCarriers)}</H2>
              <FormGroup>
                <H3 size="MEDIUM">{t(TRANSLATION_KEYS.firstWasteCarrier)}</H3>
                <H3 size="MEDIUM">
                  {t(TRANSLATION_KEYS.additionalWasteCarriers)}
                </H3>
              </FormGroup>
              <FormGroup>
                <Fieldset>
                  <Fieldset.Legend>
                    <H3>
                      {t(TRANSLATION_KEYS.doYouNeedToAddAnotherWasteCarrier)}
                    </H3>
                    <HintText>
                      {t(
                        TRANSLATION_KEYS.youCanHaveUpTo5AdditionalWasteCarriers,
                      )}
                    </HintText>
                  </Fieldset.Legend>
                  <Field
                    name={ADD_CARRIER_GROUP}
                    type="radio"
                    value={WASTE_CARRIER_CHECK_IDS.YES}
                  >
                    {({ input }) => (
                      <Radio {...input}>{t(TRANSLATION_KEYS.yes)}</Radio>
                    )}
                  </Field>
                  <Field
                    name={ADD_CARRIER_GROUP}
                    type="radio"
                    value={WASTE_CARRIER_CHECK_IDS.NO}
                  >
                    {({ input }) => (
                      <Radio {...input}>{t(TRANSLATION_KEYS.no)}</Radio>
                    )}
                  </Field>
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

export default WasteCarrierTransport;
