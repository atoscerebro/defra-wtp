import { Button, FormGroup, H2, HintText, Radio, TextArea } from 'govuk-react';
import { useRouter } from 'next/router';
import { Field, Form } from 'react-final-form';
import { useTranslation } from 'react-i18next';
import { BaseTaskPage } from '../../../../components/base-task-page';
import { RadiosConditional } from '../../../../components/radios-conditional';
import { TRANSLATION_KEYS } from '../../../../translations/constants';
import { links } from '../../../submit-export-task-list/constants';
import {
  WASTE_CARRIER_COLLECT_TRAVEL_GROUP,
  WASTE_CARRIER_COLLECT_TRAVEL_IDS,
  WASTE_CARRIER_COLLECT_TRAVEL_LABELS,
} from './constants';

const WasteCarrierCollectTravel = () => {
  const router = useRouter();
  const { t } = useTranslation();

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
              <H2 size="LARGE">
                {t(
                  TRANSLATION_KEYS.areThereAnyOtherCountriesTheWasteWillTravelThrough,
                )}
              </H2>
              <HintText>
                {t(TRANSLATION_KEYS.doNotIncludeTheExportingOrImportingCountry)}
              </HintText>
              <FormGroup>
                <Field
                  name={WASTE_CARRIER_COLLECT_TRAVEL_GROUP}
                  type="radio"
                  value={WASTE_CARRIER_COLLECT_TRAVEL_IDS.YES}
                >
                  {({ input }) => (
                    <RadiosConditional
                      {...input}
                      ariaId={'conditional-contact-1'}
                      renderConditional={() => (
                        <TextArea
                          hint={t(
                            TRANSLATION_KEYS.enterCountriesInOrderOfTravel,
                          )}
                        >
                          <></>
                        </TextArea>
                      )}
                    >
                      {t(TRANSLATION_KEYS.yes)}
                    </RadiosConditional>
                  )}
                </Field>
                <Field
                  name={WASTE_CARRIER_COLLECT_TRAVEL_GROUP}
                  type="radio"
                  value={WASTE_CARRIER_COLLECT_TRAVEL_IDS.NO}
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

export default WasteCarrierCollectTravel;
