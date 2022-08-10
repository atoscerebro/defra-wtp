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

const ImporterAddress = () => {
  const router = useRouter();

  const handleSubmit = (data: any) => {
    console.log(data);
    router.push(links.submitExportTaskList);
  };

  return (
    <BaseTaskPage
      component={
        <Form onSubmit={handleSubmit}>
          {({ handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <H2 size="LARGE">What is the disposal code?</H2>
              <FormGroup>
                <Field name={DISPOSAL_CODE_IDS.CODE}>
                  {({ input }) => (
                    <AccessibleAutocomplete
                      hintText="Start typing then choose from the list."
                      options={dCode}
                      {...input}
                    />
                  )}
                </Field>
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

export default ImporterAddress;
