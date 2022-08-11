import { FormGroup, InputField } from 'govuk-react';
import { defaultConfig } from 'next/dist/server/config-shared';
import { FC } from 'react';
import { Field } from 'react-final-form';
import { IHints, ILabels } from '../address-form/types';
import { CONTACT_FORM_IDS, defaultLabels } from './constants';

export interface IContactFormProps {
  hints?: {
    fullName?: string;
    email?: string;
    phone?: string;
    fax?: string;
  };
  labels?: typeof defaultLabels;
}

/**
 * Use the contact form as part of a larger form to collect user information.
 */
export const ContactForm: FC<IContactFormProps> = ({
  hints = {},
  labels = defaultLabels,
}) => {
  return (
    <>
      <FormGroup>
        <Field name={CONTACT_FORM_IDS.FULL_NAME}>
          {({ input }) => (
            <InputField {...input} hint={hints.fullName}>
              {labels.fullName}
            </InputField>
          )}
        </Field>
      </FormGroup>
      <FormGroup>
        <Field name={CONTACT_FORM_IDS.EMAIL_ADDRESS}>
          {({ input }) => (
            <InputField {...input} hint={hints.email}>
              {labels.emailAddress}
            </InputField>
          )}
        </Field>
      </FormGroup>
      <FormGroup>
        <Field name={CONTACT_FORM_IDS.PHONE_NUMBER}>
          {({ input }) => (
            <InputField {...input} input={{ type: 'tel' }} hint={hints.phone}>
              {labels.phoneNumber}
            </InputField>
          )}
        </Field>
      </FormGroup>
      <FormGroup>
        <Field name={CONTACT_FORM_IDS.FAX_NUMBER}>
          {({ input }) => (
            <InputField {...input} input={{ type: 'tel' }} hint={hints.fax}>
              {labels.faxNumberOptional}
            </InputField>
          )}
        </Field>
      </FormGroup>
    </>
  );
};
