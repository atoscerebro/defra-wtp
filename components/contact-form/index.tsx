import { FormGroup, InputField } from 'govuk-react';
import { FC } from 'react';
import { Field } from 'react-final-form';
import { CONTACT_FORM_IDS, CONTACT_FORM_LABELS } from './constants';

export interface IContactFormProps {
  hints?: {
    fullName?: string;
    email?: string;
    phone?: string;
    fax?: string;
  };
}

/**
 * Use the contact form as part of a larger form to collect user information.
 */
export const ContactForm: FC<IContactFormProps> = ({ hints = {} }) => {
  return (
    <>
      <FormGroup>
        <Field name={CONTACT_FORM_IDS.FULL_NAME}>
          {({ input }) => (
            <InputField {...input} hint={hints.fullName}>
              {CONTACT_FORM_LABELS.FULL_NAME}
            </InputField>
          )}
        </Field>
      </FormGroup>
      <FormGroup>
        <Field name={CONTACT_FORM_IDS.EMAIL_ADDRESS}>
          {({ input }) => (
            <InputField {...input} hint={hints.email}>
              {CONTACT_FORM_LABELS.EMAIL_ADDRESS}
            </InputField>
          )}
        </Field>
      </FormGroup>
      <FormGroup>
        <Field name={CONTACT_FORM_IDS.PHONE_NUMBER}>
          {({ input }) => (
            <InputField {...input} input={{ type: 'tel' }} hint={hints.phone}>
              {CONTACT_FORM_LABELS.PHONE_NUMBER}
            </InputField>
          )}
        </Field>
      </FormGroup>
      <FormGroup>
        <Field name={CONTACT_FORM_IDS.FAX_NUMBER}>
          {({ input }) => (
            <InputField {...input} input={{ type: 'tel' }} hint={hints.fax}>
              {CONTACT_FORM_LABELS.FAX_NUMBER}
            </InputField>
          )}
        </Field>
      </FormGroup>
    </>
  );
};
