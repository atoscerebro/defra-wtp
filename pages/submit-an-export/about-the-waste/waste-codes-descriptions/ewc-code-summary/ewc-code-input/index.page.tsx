import { NextPage } from 'next';
import { H1, FormGroup, Button, InputField } from 'govuk-react';
import { BaseTaskPage } from '../../../../../../components/base-task-page';
import { ButtonWrapper } from '../../../../../../components/form-pages/styled-components';
import { Form, Field } from 'react-final-form';
import { useRouter } from 'next/router';
import { EWCInputCaption } from './styled-component';
import { AccessibleAutocomplete } from '../../../../../../components/accessible-autocomplete/accessible-autocomplete';
import { ecWastes } from '../../../../../../components/form-pages/constants';
import { TRANSLATION_KEYS } from '../../../../../../translations/constants';
import { useTranslation } from 'react-i18next';

const EWCCodeInput: NextPage = () => {
  const router = useRouter();
  const {t} = useTranslation();

  return (
    <BaseTaskPage
      component={
        <Form
          onSubmit={(formObj) => {
            console.log(formObj);
            router.push(
              '/submit-an-export/about-the-waste/waste-codes-descriptions/ewc-code-summary',
            );
          }}
        >
          {({ handleSubmit }) => (
            <FormGroup>
              <form onSubmit={handleSubmit}>
                <H1 size="LARGE">{t(TRANSLATION_KEYS.enterAnEWCCode)}</H1>
                <Field name="ewc-code-input">
                  {({ input }) => (
                    <AccessibleAutocomplete
                      {...input}
                      options={ecWastes}
                      hintText={t(TRANSLATION_KEYS.startTypingThenChooseFromTheList)}
                    />
                  )}
                </Field>
                <ButtonWrapper>
                  <Button type="submit">{t(TRANSLATION_KEYS.saveAndContinue)}</Button>
                </ButtonWrapper>
              </form>
            </FormGroup>
          )}
        </Form>
      }
    />
  );
};

export default EWCCodeInput;
