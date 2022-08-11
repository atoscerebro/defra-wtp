import { Button, FormGroup, H2, Radio } from 'govuk-react';
import { useRouter } from 'next/router';
import { Field, Form } from 'react-final-form';
import { useTranslation } from 'react-i18next';
import { BaseTaskPage } from '../../../../components/base-task-page';
import { RadiosConditional } from '../../../../components/radios-conditional';
import { TwoThirdsInputField } from '../../../../components/two-thirds-input-field/styled-components';
import { TRANSLATION_KEYS } from '../../../../translations/constants';
import { links } from '../constants';
import {
  WASTE_CARRIER_COLLECT_LEAVE_GROUP,
  WASTE_CARRIER_COLLECT_LEAVE_IDS,
  WASTE_CARRIER_COLLECT_LEAVE_LABELS,
} from './constants';

const WasteCarrierCollectLeave = () => {
  const router = useRouter();
  const { t } = useTranslation();

  const handleSubmit = (data: any) => {
    console.log(data);
    router.push(links.wasteTravelLocations);
  };

  return (
    <BaseTaskPage
      component={
        <Form onSubmit={handleSubmit}>
          {({ handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <H2 size="LARGE">
                {t(
                  TRANSLATION_KEYS.doYouKnowTheLocationAtWhichTheWasteWillLeaveTheUk,
                )}
              </H2>
              <FormGroup>
                <Field
                  name={WASTE_CARRIER_COLLECT_LEAVE_GROUP}
                  type="radio"
                  value={WASTE_CARRIER_COLLECT_LEAVE_IDS.YES}
                >
                  {({ input }) => (
                    <RadiosConditional
                      {...input}
                      ariaId={'conditional-contact-1'}
                      renderConditional={() => (
                        <TwoThirdsInputField>
                          {t(TRANSLATION_KEYS.enterLocation)}
                        </TwoThirdsInputField>
                      )}
                    >
                      {t(TRANSLATION_KEYS.yes)}
                    </RadiosConditional>
                  )}
                </Field>
                <Field
                  name={WASTE_CARRIER_COLLECT_LEAVE_GROUP}
                  type="radio"
                  value={WASTE_CARRIER_COLLECT_LEAVE_IDS.NO}
                >
                  {({ input }) => (
                    <Radio {...input} id={'conditional-contact-2'}>
                      {t(TRANSLATION_KEYS.no)}
                    </Radio>
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

export default WasteCarrierCollectLeave;
