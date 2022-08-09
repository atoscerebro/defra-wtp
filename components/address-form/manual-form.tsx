import { FormApi } from 'final-form';
import { Button, FormGroup, InputField } from 'govuk-react';
import { FC } from 'react';
import { Field } from 'react-final-form';
import { ADDRESS_FORM_IDS, ADDRESS_FORM_LABELS } from './constants';
import * as StyledComponents from './styled-components';
import { IAddress, IHints } from './types';

export interface IManualFormProps {
  hints?: IHints;
  form: FormApi<IAddress, Partial<IAddress>>;
  onResetPostcode: () => void;
}

export const ManualForm: FC<IManualFormProps> = ({
  hints = {},
  form,
  onResetPostcode,
}) => {
  const handleResetPostcode = () => {
    onResetPostcode();
    form.reset();
  };

  return (
    <>
      <FormGroup>
        <StyledComponents.LinkButton as="button" onClick={handleResetPostcode}>
          Search by postcode
        </StyledComponents.LinkButton>
      </FormGroup>
      <FormGroup>
        <Field name={ADDRESS_FORM_IDS.LINE_1}>
          {({ input }) => (
            <InputField {...input} hint={hints.line1}>
              {ADDRESS_FORM_LABELS.LINE_1}
            </InputField>
          )}
        </Field>
      </FormGroup>
      <FormGroup>
        <Field name={ADDRESS_FORM_IDS.LINE_2}>
          {({ input }) => (
            <InputField {...input} hint={hints.line2}>
              {ADDRESS_FORM_LABELS.LINE_2}
            </InputField>
          )}
        </Field>
      </FormGroup>
      <FormGroup>
        <Field name={ADDRESS_FORM_IDS.TOWN}>
          {({ input }) => (
            <InputField {...input} hint={hints.town}>
              {ADDRESS_FORM_LABELS.TOWN}
            </InputField>
          )}
        </Field>
      </FormGroup>
      <FormGroup>
        <Field name={ADDRESS_FORM_IDS.POSTCODE}>
          {({ input }) => (
            <InputField {...input} hint={hints.postcode}>
              {ADDRESS_FORM_LABELS.POSTCODE}
            </InputField>
          )}
        </Field>
      </FormGroup>
      <FormGroup>
        <Field name={ADDRESS_FORM_IDS.COUNTRY}>
          {({ input }) => (
            <InputField {...input} hint={hints.country}>
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
