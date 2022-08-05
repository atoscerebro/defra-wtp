import { Button, FormGroup, InputField } from 'govuk-react';
import { FC } from 'react';
import { Field } from 'react-final-form';
import { ADDRESS_FORM_IDS, ADDRESS_FORM_LABELS } from './constants';

export interface IManualFormProps {
  line1Hint?: string;
  line2Hint?: string;
  townHint?: string;
  postcodeHint?: string;
  countryHint?: string;
}

export const ManualForm: FC<IManualFormProps> = ({
  line1Hint,
  line2Hint,
  townHint,
  postcodeHint,
  countryHint,
}) => {
  return (
    <>
      <FormGroup>
        <Field name={ADDRESS_FORM_IDS.LINE_1}>
          {({ input }) => (
            <InputField {...input} hint={line1Hint}>
              {ADDRESS_FORM_LABELS.LINE_1}
            </InputField>
          )}
        </Field>
      </FormGroup>
      <FormGroup>
        <Field name={ADDRESS_FORM_IDS.LINE_2}>
          {({ input }) => (
            <InputField {...input} hint={line2Hint}>
              {ADDRESS_FORM_LABELS.LINE_2}
            </InputField>
          )}
        </Field>
      </FormGroup>
      <FormGroup>
        <Field name={ADDRESS_FORM_IDS.TOWN}>
          {({ input }) => (
            <InputField {...input} hint={townHint}>
              {ADDRESS_FORM_LABELS.TOWN}
            </InputField>
          )}
        </Field>
      </FormGroup>
      <FormGroup>
        <Field name={ADDRESS_FORM_IDS.POSTCODE}>
          {({ input }) => (
            <InputField {...input} hint={postcodeHint}>
              {ADDRESS_FORM_LABELS.POSTCODE}
            </InputField>
          )}
        </Field>
      </FormGroup>
      <FormGroup>
        <Field name={ADDRESS_FORM_IDS.COUNTRY}>
          {({ input }) => (
            <InputField {...input} hint={countryHint}>
              {ADDRESS_FORM_LABELS.COUNTRY}
            </InputField>
          )}
        </Field>
      </FormGroup>
      <div>
        <Button>Save and continue</Button>
      </div>
    </>
  );
};
