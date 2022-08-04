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
import { BaseTaskPage } from '../../../../../components/base-task-page';
import { links } from '../constants';
import {
  ADD_CARRIER_GROUP,
  WASTE_CARRIER_CHECK_IDS,
  WASTE_CARRIER_CHECK_LABELS,
} from './constants';

const WasteCarrierTransport = () => {
  const router = useRouter();

  const handleSubmit = (data: any) => {
    const addCarrier = {
      yes: true,
      no: false,
    }[data['add-carrier'] as 'yes' | 'no'];

    router.push(addCarrier ? links.wasteCarrier : links.wasteCarrierCollect);
  };

  return (
    <BaseTaskPage
      component={
        <Form onSubmit={handleSubmit}>
          {({ handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <H2 size="LARGE">Waste Carriers</H2>
              <FormGroup>
                <H3 size="MEDIUM">First Waste Carrier</H3>
                <H3 size="MEDIUM">Additional Waste Carriers</H3>
              </FormGroup>
              <FormGroup>
                <Fieldset>
                  <Fieldset.Legend>
                    <H3>Do you need to add another another waste carrier?</H3>
                    <HintText>
                      You can have up to 5 additional waste carriers.
                    </HintText>
                  </Fieldset.Legend>
                  <Field
                    name={ADD_CARRIER_GROUP}
                    type="radio"
                    value={WASTE_CARRIER_CHECK_IDS.YES}
                  >
                    {({ input }) => (
                      <Radio {...input}>{WASTE_CARRIER_CHECK_LABELS.YES}</Radio>
                    )}
                  </Field>
                  <Field
                    name={ADD_CARRIER_GROUP}
                    type="radio"
                    value={WASTE_CARRIER_CHECK_IDS.NO}
                  >
                    {({ input }) => (
                      <Radio {...input}>{WASTE_CARRIER_CHECK_LABELS.NO}</Radio>
                    )}
                  </Field>
                </Fieldset>
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
