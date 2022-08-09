import { NextPage } from 'next';
import { FormGroup, Radio, H1, Button, GridRow, GridCol } from 'govuk-react';
import { Main } from 'govuk-react';
import { useMemo, useState } from 'react';
import { Form, Field } from 'react-final-form';
import { DisplayInputField } from '../../../components/display-input-field';
import { useRouter } from 'next/router';
import { ButtonWrapper } from '../../../components/form-pages/styled-components';
import { uniqueRefCrumbs } from '../../../payloads/page-breadcumbs';
import { PageBreadcrumbs } from '../../../components/page-breadcrumbs';
import { useTranslation } from 'react-i18next';
import { translateCrumbs } from '../../../translations/utils';

// const PRENOTIFY_ROUTE = 'prenotify';
const PRENOTIFY_ROUTE = '/submit-export-task-list';

const UniqueRef: NextPage = () => {
  const [usingOwnRef, setUsingOwnRef] = useState(false);
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
        currentPage={t('yourReferenceNumber')}
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
                    {t('doYouWantToAddYourOwnReferenceNumberToThisExport')}
                  </H1>
                  <Field name="ref-number-answer" type="radio" value="yes">
                    {({ input }) => (
                      <Radio
                        {...input}
                        onClick={() => {
                          setUsingOwnRef(true);
                        }}
                      >
                        {t('yes')}
                      </Radio>
                    )}
                  </Field>
                  {usingOwnRef && (
                    <Field name="ref-number-input">
                      {({ input }) => (
                        <DisplayInputField
                          {...input}
                          label={t('enterYourReferenceNumber')}
                        />
                      )}
                    </Field>
                  )}
                  <Field
                    defaultValue="no"
                    name="ref-number-answer"
                    type="radio"
                    value="no"
                  >
                    {({ input }) => (
                      <Radio
                        {...input}
                        onClick={() => {
                          setUsingOwnRef(false);
                        }}
                      >
                        {t('no')}
                      </Radio>
                    )}
                  </Field>
                  <ButtonWrapper>
                    <Button type="submit">{t('saveAndContinue')}</Button>
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
