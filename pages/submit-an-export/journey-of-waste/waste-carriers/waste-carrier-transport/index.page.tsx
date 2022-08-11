import { Button, FormGroup, H2, Paragraph } from 'govuk-react';
import { useRouter } from 'next/router';
import { Field, Form } from 'react-final-form';
import { useTranslation } from 'react-i18next';
import { BaseTaskPage } from '../../../../../components/base-task-page';
import { RadiosConditional } from '../../../../../components/radios-conditional';
import { TwoThirdsInputField } from '../../../../../components/two-thirds-input-field/styled-components';
import { TRANSLATION_KEYS } from '../../../../../translations/constants';
import { links } from '../../constants';
import {
  WASTE_CARRIER_TRANSPORT_GROUP,
  WASTE_CARRIER_TRANSPORT_IDS,
  WASTE_CARRIER_TRANSPORT_LABELS,
} from './constants';

const WasteCarrierTransport = () => {
  const router = useRouter();
  const { t } = useTranslation();

  const handleSubmit = (data: any) => {
    console.log(data);
    router.push(links.wasteCarrierCheck);
  };

  return (
    <BaseTaskPage
      component={
        <Form onSubmit={handleSubmit}>
          {({ handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <H2 size="LARGE">
                {t(TRANSLATION_KEYS.howWillTheWasteCarrierTransportTheWaste)}
              </H2>
              <Paragraph>
                {
                  t(
                    TRANSLATION_KEYS.youllBeAbleToUpdateTheseDetailsAfterSubmittingThisExport,
                  ) as string
                }
              </Paragraph>
              <FormGroup>
                <Field
                  name={WASTE_CARRIER_TRANSPORT_GROUP}
                  value={WASTE_CARRIER_TRANSPORT_IDS.ROAD}
                  type="radio"
                >
                  {({ input }) => (
                    <RadiosConditional
                      {...input}
                      ariaId={'conditional-contact-road'}
                      renderConditional={() => (
                        <TwoThirdsInputField
                          hint={t(
                            TRANSLATION_KEYS.enterContainerNumberOrVehicleRegistrationNumberOptional,
                          )}
                        >
                          <></>
                        </TwoThirdsInputField>
                      )}
                    >
                      {t(TRANSLATION_KEYS.road)}
                    </RadiosConditional>
                  )}
                </Field>
                <Field
                  name={WASTE_CARRIER_TRANSPORT_GROUP}
                  value={WASTE_CARRIER_TRANSPORT_IDS.RAIL}
                  type="radio"
                >
                  {({ input }) => (
                    <RadiosConditional
                      {...input}
                      ariaId={'conditional-contact-rail'}
                      renderConditional={() => (
                        <TwoThirdsInputField
                          hint={t(
                            TRANSLATION_KEYS.enterContainerNumberOptional,
                          )}
                        >
                          <></>
                        </TwoThirdsInputField>
                      )}
                    >
                      {t(TRANSLATION_KEYS.rail)}
                    </RadiosConditional>
                  )}
                </Field>
                <Field
                  name={WASTE_CARRIER_TRANSPORT_GROUP}
                  value={WASTE_CARRIER_TRANSPORT_IDS.SEA}
                  type="radio"
                >
                  {({ input }) => (
                    <RadiosConditional
                      {...input}
                      ariaId={'conditional-contact-sea'}
                      renderConditional={() => (
                        <TwoThirdsInputField
                          hint={t(
                            TRANSLATION_KEYS.enterContainerNumberOptional,
                          )}
                        >
                          <></>
                        </TwoThirdsInputField>
                      )}
                    >
                      {t(TRANSLATION_KEYS.sea)}
                    </RadiosConditional>
                  )}
                </Field>
                <Field
                  name={WASTE_CARRIER_TRANSPORT_GROUP}
                  value={WASTE_CARRIER_TRANSPORT_IDS.AIR}
                  type="radio"
                >
                  {({ input }) => (
                    <RadiosConditional
                      {...input}
                      ariaId={'conditional-contact-air'}
                      renderConditional={() => (
                        <TwoThirdsInputField
                          hint={t(TRANSLATION_KEYS.enterFlightNumberOptional)}
                        >
                          <></>
                        </TwoThirdsInputField>
                      )}
                    >
                      {t(TRANSLATION_KEYS.air)}
                    </RadiosConditional>
                  )}
                </Field>
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
