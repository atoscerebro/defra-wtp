import {
  Button,
  Fieldset,
  FormGroup,
  H2,
  H3,
  HintText,
  InputField,
  TextArea,
} from 'govuk-react';
import { useRouter } from 'next/router';
import { Field, Form } from 'react-final-form';
import { BaseTaskPage } from '../../../../components/base-task-page';
import { links } from '../../../submit-export-task-list/constants';
import { DISPOSAL_CODE_IDS } from './constants';
import { AccessibleAutocomplete } from '../../../../components/accessible-autocomplete/accessible-autocomplete';
import { dCode } from '../../../../components/form-pages/constants';
import { useTranslation } from 'react-i18next';
import { TRANSLATION_KEYS } from '../../../../translations/constants';

const ImporterAddress = () => {
  const router = useRouter();

  const handleSubmit = (data: any) => {
    console.log(data);
    router.push(links.submitExportTaskList);
  };

  const { t } = useTranslation();

  return (
    <BaseTaskPage
      component={
        <Form onSubmit={handleSubmit}>
          {({ handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <H2 size="LARGE">{t(TRANSLATION_KEYS.whatIsTheDisposalCode)}</H2>
              <FormGroup>
                <Field name={DISPOSAL_CODE_IDS.CODE}>
                  {({ input }) => (
                    <AccessibleAutocomplete
                      hintText={t(
                        TRANSLATION_KEYS.startTypingThenChooseFromTheList,
                      )}
                      options={dCode}
                      {...input}
                    />
                  )}
                </Field>
              </FormGroup>
              <div>
                <Button>{t(TRANSLATION_KEYS.saveAndContinue)}</Button>
              </div>
            </form>
          )}
        </Form>
      }
    />
  );
};

export default ImporterAddress;
