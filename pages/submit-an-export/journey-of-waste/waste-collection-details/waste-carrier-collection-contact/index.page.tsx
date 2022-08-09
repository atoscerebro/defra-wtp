import {
  Button,
  Fieldset,
  FormGroup,
  H2,
  H3,
  HintText,
  InputField,
  Paragraph,
} from 'govuk-react';
import { Field, Form } from 'react-final-form';
import { LineBreak } from '../../../../../components/line-break';
import { BaseTaskPage } from '../../../../../components/base-task-page';
import {
  WASTE_CARRIER_COLLECT_DETAILS_IDS,
  WASTE_CARRIER_COLLECT_DETAILS_LABELS,
} from './constants';
import { Link } from '../../../../../components/link';
import { useRouter } from 'next/router';
import { links } from '../../constants';
import { ContactForm } from '../../../../../components/contact-form';

const WasteCarrierCollectionContact = () => {
  const router = useRouter();

  const handleSubmit = (data: any) => {
    console.log(data);
    router.push(links.wasteLeaveLocation);
  };

  return (
    <BaseTaskPage
      component={
        <Form onSubmit={handleSubmit}>
          {({ handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <H2 size="LARGE">Waste collection details</H2>
              <FormGroup>
                <LineBreak>
                  {['5 Stafford Park', 'Telford', 'TRF 3RT', 'UK']}
                </LineBreak>
              </FormGroup>
              <FormGroup>
                <HintText>
                  We&apos;ll use this as the exporting country.
                </HintText>
                <Link href={links.wasteCarrierCollectLocation}>
                  <Paragraph>Change address</Paragraph>
                </Link>
              </FormGroup>
              <FormGroup>
                <Field
                  name={WASTE_CARRIER_COLLECT_DETAILS_IDS.ORGANISATION_NAME}
                >
                  {({ input }) => (
                    <InputField {...input}>
                      {WASTE_CARRIER_COLLECT_DETAILS_LABELS.ORGANISATION_NAME}
                    </InputField>
                  )}
                </Field>
              </FormGroup>
              <FormGroup>
                <Fieldset>
                  <Fieldset.Legend>
                    <H3>Contact Details</H3>
                  </Fieldset.Legend>
                  <ContactForm />
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

export default WasteCarrierCollectionContact;