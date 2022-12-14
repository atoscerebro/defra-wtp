import { NextPage } from 'next';
import {
  H1,
  FormGroup,
  Radio,
  Paragraph,
  Caption,
  Button,
  Heading,
  Fieldset,
} from 'govuk-react';
import { BaseTaskPage } from '../../../../../components/base-task-page';
import {
  CaptionWrapper,
  ButtonWrapper,
} from '../../../../../components/form-pages/styled-components';
import { Form, Field } from 'react-final-form';
import { useRouter } from 'next/router';
import { useMemo, useState } from 'react';
import { SummaryList } from '../../../../../components/summary-list';

// dummy data - change import for summary list rows
import { summaryListRows } from '../../../../../payloads/summary-list-rows';
import { TRANSLATION_KEYS } from '../../../../../translations/constants';
import { useTranslation } from 'react-i18next';
import { translateSummaryListRows } from '../../../../../translations/utils';

const EWCCodeSummary: NextPage = () => {
  const router = useRouter();
  const [anotherEWCCode, setAnotherEWCCode] = useState(false);
  const { t } = useTranslation();

  const translatedRows = useMemo(
    () => translateSummaryListRows(summaryListRows, t),
    [t],
  );

  return (
    <BaseTaskPage
      component={
        <>
          <H1 size="LARGE">{t(TRANSLATION_KEYS.youHaveAdded3EWCCodes)}</H1>
          <SummaryList rows={translatedRows} />

          <Form
            onSubmit={(formObj) => {
              console.log(formObj);
              const routerUrl = anotherEWCCode
                ? '/submit-an-export/about-the-waste/waste-codes-descriptions/ewc-code-summary/ewc-code-input'
                : '/submit-an-export/about-the-waste/waste-codes-descriptions/national-code-radio';
              router.push(routerUrl);
            }}
          >
            {({ handleSubmit }) => (
              <form onSubmit={handleSubmit}>
                <FormGroup>
                  <H1 size="MEDIUM">
                    {t(TRANSLATION_KEYS.doYouNeedToAddAnotherEWCCode)}
                  </H1>
                  <Fieldset>
                    <Field name="ewc-code-radio" type="radio" value="yes">
                      {({ input }) => (
                        <Radio
                          {...input}
                          onClick={() => {
                            setAnotherEWCCode(true);
                          }}
                          inline
                        >
                          {t(TRANSLATION_KEYS.yes)}
                        </Radio>
                      )}
                    </Field>
                    <Field
                      defaultValue="no"
                      name="ewc-code-radio"
                      type="radio"
                      value="no"
                    >
                      {({ input }) => (
                        <Radio
                          {...input}
                          onClick={() => {
                            setAnotherEWCCode(false);
                          }}
                          inline
                        >
                          {t(TRANSLATION_KEYS.no)}
                        </Radio>
                      )}
                    </Field>
                  </Fieldset>
                </FormGroup>
                <ButtonWrapper>
                  <Button type="submit">
                    {t(TRANSLATION_KEYS.saveAndContinue)}
                  </Button>
                </ButtonWrapper>
              </form>
            )}
          </Form>
        </>
      }
    />
  );
};

export default EWCCodeSummary;
