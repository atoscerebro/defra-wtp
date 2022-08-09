import { NextPage } from 'next';
import { FormGroup, Radio, H1, Button, GridRow, GridCol } from 'govuk-react';
import { Main } from 'govuk-react';
import { Form, Field } from 'react-final-form';
import { useRouter } from 'next/router';
import { ButtonWrapper } from '../../../components/form-pages/styled-components';
import { uniqueRefCrumbs } from '../../../payloads/page-breadcumbs';
import { PageBreadcrumbs } from '../../../components/page-breadcrumbs';
import { RadiosConditional } from '../../../components/radios-conditional';
import { TwoThirdsInputField } from '../../../components/two-thirds-input-field/styled-components';

// const PRENOTIFY_ROUTE = 'prenotify';
const PRENOTIFY_ROUTE = '/submit-export-task-list';

const UniqueRef: NextPage = () => {
  const router = useRouter();

  const handleFormSubmit = () => {
    router.push(PRENOTIFY_ROUTE);
  };

  return (
    <Main>
      <PageBreadcrumbs
        crumbs={uniqueRefCrumbs}
        currentPage="Your reference number"
      />
      <GridRow>
        <GridCol setWidth="two-thirds">
          <Form
            onSubmit={(e) => {
              console.log(e); //ref-number-answer: 'yes' or 'no'. (If 'yes') ref-number-input: 'reference number string'

              handleFormSubmit();
            }}
          >
            {({ handleSubmit }) => (
              <FormGroup>
                <form onSubmit={handleSubmit}>
                  <H1 size="LARGE">
                    Do you want to add your own reference number to this export?
                  </H1>
                  <Field name="ref-number-answer" type="radio" value="yes">
                    {({ input }) => (
                      <RadiosConditional
                        {...input}
                        ariaId={'conditional-contact'}
                        renderConditional={() => (
                          <TwoThirdsInputField>
                            Enter your reference number
                          </TwoThirdsInputField>
                        )}
                      >
                        Yes
                      </RadiosConditional>
                    )}
                  </Field>

                  <Field name="ref-number-answer" type="radio" value="no">
                    {({ input }) => <Radio {...input}>No</Radio>}
                  </Field>
                  <ButtonWrapper>
                    <Button type="submit">Save and continue</Button>
                  </ButtonWrapper>
                </form>
              </FormGroup>
            )}
          </Form>
        </GridCol>
      </GridRow>
    </Main>
  );
};

export default UniqueRef;
