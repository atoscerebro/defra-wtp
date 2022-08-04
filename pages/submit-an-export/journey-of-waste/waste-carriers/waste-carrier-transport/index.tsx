import { Button, FormGroup, H2, Paragraph, Radio } from 'govuk-react';
import { useRouter } from 'next/router';
import { Field, Form } from 'react-final-form';
import { BaseTaskPage } from '../../../../../components/base-task-page';
import { links } from '../constants';
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
                    <Radio {...input}>
                      {WASTE_CARRIER_TRANSPORT_LABELS.ROAD}
                    </Radio>
                  )}
                </Field>
                <Field
                  name={WASTE_CARRIER_TRANSPORT_GROUP}
                  value={WASTE_CARRIER_TRANSPORT_IDS.RAIL}
                  type="radio"
                >
                  {({ input }) => (
                    <Radio {...input}>
                      {WASTE_CARRIER_TRANSPORT_LABELS.RAIL}
                    </Radio>
                  )}
                </Field>
                <Field
                  name={WASTE_CARRIER_TRANSPORT_GROUP}
                  value={WASTE_CARRIER_TRANSPORT_IDS.SEA}
                  type="radio"
                >
                  {({ input }) => (
                    <Radio {...input}>
                      {WASTE_CARRIER_TRANSPORT_LABELS.SEA}
                    </Radio>
                  )}
                </Field>
                <Field
                  name={WASTE_CARRIER_TRANSPORT_GROUP}
                  value={WASTE_CARRIER_TRANSPORT_IDS.AIR}
                  type="radio"
                >
                  {({ input }) => (
                    <Radio {...input}>
                      {WASTE_CARRIER_TRANSPORT_LABELS.AIR}
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

export default WasteCarrierTransport;
