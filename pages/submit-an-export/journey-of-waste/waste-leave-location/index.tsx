import { Button, FormGroup, H2, Radio } from 'govuk-react';
import { useRouter } from 'next/router';
import { Field, Form } from 'react-final-form';
import { BaseTaskPage } from '../../../../components/base-task-page';
import { links } from '../constants';
import {
  WASTE_CARRIER_COLLECT_LEAVE_GROUP,
  WASTE_CARRIER_COLLECT_LEAVE_IDS,
  WASTE_CARRIER_COLLECT_LEAVE_LABELS,
} from './constants';

const WasteCarrierCollectLeave = () => {
  const router = useRouter();

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
                Do you know the location at which the waste will leave the UK?
              </H2>
              <FormGroup>
                <Field
                  name={WASTE_CARRIER_COLLECT_LEAVE_GROUP}
                  type="radio"
                  value={WASTE_CARRIER_COLLECT_LEAVE_IDS.YES}
                >
                  {({ input }) => (
                    <Radio {...input}>
                      {WASTE_CARRIER_COLLECT_LEAVE_LABELS.YES}
                    </Radio>
                  )}
                </Field>
                <Field
                  name={WASTE_CARRIER_COLLECT_LEAVE_GROUP}
                  type="radio"
                  value={WASTE_CARRIER_COLLECT_LEAVE_IDS.NO}
                >
                  {({ input }) => (
                    <Radio {...input}>
                      {WASTE_CARRIER_COLLECT_LEAVE_LABELS.NO}
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

export default WasteCarrierCollectLeave;
