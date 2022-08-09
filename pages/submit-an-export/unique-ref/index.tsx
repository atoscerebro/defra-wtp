import { NextPage } from 'next';
import { FormGroup, Radio, H1, Button, GridRow, GridCol } from 'govuk-react';
import { Main } from 'govuk-react';
import { useMemo, useState } from 'react';
import { Form, Field } from 'react-final-form';
import { useRouter } from 'next/router';
import { ButtonWrapper } from '../../../components/form-pages/styled-components';
import { uniqueRefCrumbs } from '../../../payloads/page-breadcumbs';
import { PageBreadcrumbs } from '../../../components/page-breadcrumbs';
import { RadiosConditional } from '../../../components/radios-conditional';
import { TwoThirdsInputField } from '../../../components/two-thirds-input-field/styled-components';
import { useTranslation } from 'react-i18next';
import { translateCrumbs } from '../../../translations/utils';
import { TRANSLATION_KEYS } from '../../../translations/constants';

// const PRENOTIFY_ROUTE = 'prenotify';
const PRENOTIFY_ROUTE = '/submit-export-task-list';

const UniqueRef: NextPage = () => {
  const router = useRouter();

  const handleFormSubmit = () => {
    router.push(PRENOTIFY_ROUTE);
  };

  const { t } = useTranslation();

  const translatedCrumbs = useMemo(
    () => translateCrumbs(uniqueRefCrumbs, t),
    [t],
  );

  return (
    <Main>
      <PageBreadcrumbs
        crumbs={translatedCrumbs}
        currentPage={t(TRANSLATION_KEYS.yourReferenceNumber)}
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
                    {t(
                      TRANSLATION_KEYS.doYouWantToAddYourOwnReferenceNumberToThisExport,
                    )}
                  </H1>
                  <Field name="ref-number-answer" type="radio" value="yes">
                    {({ input }) => (
                      <RadiosConditional
                        {...input}
                        ariaId={'conditional-contact'}
                        renderConditional={() => (
                          <TwoThirdsInputField>
                            t(TRANSLATION_KEYS.enterYourReferenceNumber)
                          </TwoThirdsInputField>
                        )}
                      >
                        {t(TRANSLATION_KEYS.yes)}
                      </RadiosConditional>
                    )}
                  </Field>

                  <Field name="ref-number-answer" type="radio" value="no">
                    {({ input }) => <Radio {...input}>t(TRANSLATION_KEYS.no)</Radio>}
                  </Field>
                  <ButtonWrapper>
                    <Button type="submit">
                      {t(TRANSLATION_KEYS.saveAndContinue)}
                    </Button>
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
