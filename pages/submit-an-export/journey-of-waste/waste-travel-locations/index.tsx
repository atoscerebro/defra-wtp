import { Button, FormGroup, H2, HintText, Radio, TextArea } from 'govuk-react';
import { useRouter } from 'next/router';
import { Field, Form } from 'react-final-form';
import { BaseTaskPage } from '../../../../components/base-task-page';
import { RadiosConditional } from '../../../../components/radios-conditional';
import { links } from '../../../submit-export-task-list/constants';
import {
  WASTE_CARRIER_COLLECT_TRAVEL_GROUP,
  WASTE_CARRIER_COLLECT_TRAVEL_IDS,
  WASTE_CARRIER_COLLECT_TRAVEL_LABELS,
} from './constants';

const WasteCarrierCollectTravel = () => {
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
              <H2 size="LARGE">
                Are there any other countries the waste will travel through?
              </H2>
              <HintText>
                Do not include the exporting or importing country.
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
                      id={'conditional-contact-1'}
                      renderConditional={() => (
                        <TextArea hint="Enter countries in order of travel">
                          <></>
                        </TextArea>
                      )}
                    >
                      {WASTE_CARRIER_COLLECT_TRAVEL_LABELS.YES}
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
                      {WASTE_CARRIER_COLLECT_TRAVEL_LABELS.NO}
                    </Radio>
                  )}
                </Field>
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

export default WasteCarrierCollectTravel;
