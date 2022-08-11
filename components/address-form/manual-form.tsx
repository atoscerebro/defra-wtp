import { FormApi } from 'final-form';
import { Button, FormGroup, InputField } from 'govuk-react';
import { FC } from 'react';
import { Field } from 'react-final-form';
import { ADDRESS_FORM_IDS } from './constants';
import * as StyledComponents from './styled-components';
import { IAddress, IHints, ILabels } from './types';

export interface IManualFormProps {
  hints?: IHints;
  labels: ILabels;
  form: FormApi<IAddress, Partial<IAddress>>;
  onResetPostcode: () => void;
}

export const ManualForm: FC<IManualFormProps> = ({
  hints = {},
  labels,
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
              {labels.line1}
            </InputField>
          )}
        </Field>
      </FormGroup>
      <FormGroup>
        <Field name={ADDRESS_FORM_IDS.LINE_2}>
          {({ input }) => (
            <InputField {...input} hint={hints.line2}>
              {labels.line2}
            </InputField>
          )}
        </Field>
      </FormGroup>
      <FormGroup>
        <Field name={ADDRESS_FORM_IDS.TOWN}>
          {({ input }) => (
            <InputField {...input} hint={hints.town}>
              {labels.town}
            </InputField>
          )}
        </Field>
      </FormGroup>
      <FormGroup>
        <Field name={ADDRESS_FORM_IDS.POSTCODE}>
          {({ input }) => (
            <InputField {...input} hint={hints.postcode}>
              {labels.postcode}
            </InputField>
          )}
        </Field>
      </FormGroup>
      <FormGroup>
        <Field name={ADDRESS_FORM_IDS.COUNTRY}>
          {({ input }) => (
            <InputField {...input} hint={hints.country}>
              {labels.country}
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
