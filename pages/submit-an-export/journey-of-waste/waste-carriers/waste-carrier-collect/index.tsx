import { Button, FormGroup, H2, InputField } from 'govuk-react';
import { useRouter } from 'next/router';
import { Field, Form } from 'react-final-form';
import { BaseTaskPage } from '../../../../../components/base-task-page';
import { links } from '../constants';
import {
  WASTE_CARRIER_COLLECT_IDS,
  WASTE_CARRIER_COLLECT_LABELS,
} from './constants';

const WasteCarrierCollect = () => {
  const router = useRouter();

  const handleSubmit = (data: any) => {
    console.log(data);
    router.push(links.wasteCarrierCollectDetails);
  };

  return (
    <BaseTaskPage
      component={
        <Form onSubmit={handleSubmit}>
          {({ handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <H2 size="LARGE">
                Where will the waste carrier collect the waste from?
              </H2>
              <FormGroup>
                <FormGroup>
                  <Field name={WASTE_CARRIER_COLLECT_IDS.ADDRESS_1}>
                    {({ input }) => (
                      <InputField {...input}>
                        {WASTE_CARRIER_COLLECT_LABELS.ADDRESS_1}
                      </InputField>
                    )}
                  </Field>
                </FormGroup>
                <FormGroup>
                  <Field name={WASTE_CARRIER_COLLECT_IDS.ADDRESS_2}>
                    {({ input }) => (
                      <InputField {...input}>
                        {WASTE_CARRIER_COLLECT_LABELS.ADDRESS_2}
                      </InputField>
                    )}
                  </Field>
                </FormGroup>
                <FormGroup>
                  <Field name={WASTE_CARRIER_COLLECT_IDS.TOWN}>
                    {({ input }) => (
                      <InputField {...input}>
                        {WASTE_CARRIER_COLLECT_LABELS.TOWN}
                      </InputField>
                    )}
                  </Field>
                </FormGroup>
                <FormGroup>
                  <Field name={WASTE_CARRIER_COLLECT_IDS.POSTCODE}>
                    {({ input }) => (
                      <InputField {...input}>
                        {WASTE_CARRIER_COLLECT_LABELS.POSTCODE}
                      </InputField>
                    )}
                  </Field>
                </FormGroup>
                <FormGroup>
                  <Field name={WASTE_CARRIER_COLLECT_IDS.COUNTRY}>
                    {({ input }) => (
                      <InputField
                        {...input}
                        hint="We'll use this as the exporting country."
                      >
                        {WASTE_CARRIER_COLLECT_LABELS.COUNTRY}
                      </InputField>
                    )}
                  </Field>
                </FormGroup>
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

export default WasteCarrierCollect;
