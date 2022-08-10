import { NextPage } from 'next';
import { H1, FormGroup, Radio, Paragraph, Caption, Button } from 'govuk-react';
import { BaseTaskPage } from '../../../../../components/base-task-page';
import {
  CaptionWrapper,
  ButtonWrapper,
} from '../../../../../components/form-pages/styled-components';
import { Form, Field } from 'react-final-form';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { AccessibleAutocomplete } from '../../../../../components/accessible-autocomplete/accessible-autocomplete';
import { ecWastes } from '../../../../../components/form-pages/constants';
import { RadiosConditional } from '../../../../../components/radios-conditional';
import { TRANSLATION_KEYS } from '../../../../../translations/constants';
import { useTranslation } from 'react-i18next';

const EWCCodeRadio: NextPage = () => {
  const router = useRouter();
  const [usingEWCCode, setUsingEWCCode] = useState(false);
  const {t} = useTranslation();

  return (
    <BaseTaskPage
      component={
        <Form
          onSubmit={(formObj) => {
            console.log(formObj);
            const routerUrl = usingEWCCode
              ? '/submit-an-export/about-the-waste/waste-codes-descriptions/ewc-code-summary'
              : '/submit-an-export/about-the-waste/waste-codes-descriptions/national-code-radio';
            router.push(routerUrl);
          }}
        >
          {({ handleSubmit }) => (
            <FormGroup>
              <form onSubmit={handleSubmit}>
                <H1 size="LARGE">{t(TRANSLATION_KEYS.doYouHaveAnEWCCode)}</H1>
                <CaptionWrapper>
                  <Caption size="M">{t(TRANSLATION_KEYS.anEwcCodeEuropeanWasteCatalogueCodeIsAlsoKnownAsAnECListOfWaste)}
                    
                  </Caption>
                </CaptionWrapper>
                <Field name="ewc-code-radio" type="radio" value="yes">
                  {({ input }) => (
                    <RadiosConditional
                      onClick={() => {
                        setUsingEWCCode(true);
                      }}
                      {...input}
                      ariaId=""
                      renderConditional={() => (
                        <AccessibleAutocomplete
                          {...input}
                          options={ecWastes}
                          hintText={t(TRANSLATION_KEYS.startTypingThenChooseFromTheList)}
                        />
                      )}
                    >
                      {t(TRANSLATION_KEYS.yes)}
                    </RadiosConditional>
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
                        setUsingEWCCode(false);
                      }}
                    >
                      {t(TRANSLATION_KEYS.no)}
                    </Radio>
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

export default EWCCodeRadio;
