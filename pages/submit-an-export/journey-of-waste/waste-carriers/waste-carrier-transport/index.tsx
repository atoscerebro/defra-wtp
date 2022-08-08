import { Button, FormGroup, H2, Paragraph } from 'govuk-react';
import { useRouter } from 'next/router';
import { Field, Form } from 'react-final-form';
import { BaseTaskPage } from '../../../../../components/base-task-page';
import { RadiosConditional } from '../../../../../components/radios-conditional';
import { TwoThirdsInputField } from '../../../../../components/two-thirds-input-field/styled-components';
import { links } from '../../constants';
import {
  WASTE_CARRIER_TRANSPORT_GROUP,
  WASTE_CARRIER_TRANSPORT_IDS,
  WASTE_CARRIER_TRANSPORT_LABELS,
} from './constants';

const WasteCarrierTransport = () => {
  const router = useRouter();

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
                How will the waste carrier transport the waste?
              </H2>
              <Paragraph>
                You&apos;ll be able to update these details after submitting
                this export.
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
                      id={'conditional-contact-road'}
                      renderConditional={() => (
                        <TwoThirdsInputField hint="Enter container number or vehicle registration number (optional)">
                          <></>
                        </TwoThirdsInputField>
                      )}
                    >
                      {WASTE_CARRIER_TRANSPORT_LABELS.ROAD}
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
                      id={'conditional-contact-rail'}
                      renderConditional={() => (
                        <TwoThirdsInputField hint="Enter container number (optional)">
                          <></>
                        </TwoThirdsInputField>
                      )}
                    >
                      {WASTE_CARRIER_TRANSPORT_LABELS.RAIL}
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
                      id={'conditional-contact-sea'}
                      renderConditional={() => (
                        <TwoThirdsInputField hint="Enter container number (optional)">
                          <></>
                        </TwoThirdsInputField>
                      )}
                    >
                      {WASTE_CARRIER_TRANSPORT_LABELS.SEA}
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
                      id={'conditional-contact-air'}
                      renderConditional={() => (
                        <TwoThirdsInputField hint="Enter flight number (optional)">
                          <></>
                        </TwoThirdsInputField>
                      )}
                    >
                      {WASTE_CARRIER_TRANSPORT_LABELS.AIR}
                    </RadiosConditional>
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

export default WasteCarrierTransport;
