import { NextPage } from 'next';
import { BaseTaskPage } from '../../../../components/base-task-page';
import { DisplayInputFieldWrapper } from '../../../../components/display-input-field/styled-components';
import { Form, Field } from 'react-final-form';
import { H1, FormGroup, Caption, Button, ErrorText } from 'govuk-react';
import { Link } from '../../../../components/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import {
  CaptionWrapper,
  ButtonWrapper,
} from '../../../../components/form-pages/styled-components';
import { QuantityInput } from './quantity-input';
import { RadiosConditional } from '../../../../components/radios-conditional';
import { useTranslation } from 'react-i18next';
import { TRANSLATION_KEYS } from '../../../../translations/constants';

const QuantityOfWaste: NextPage = () => {
  const router = useRouter();
  const { t } = useTranslation();
  const mustBeNumber = (value: any) =>
    isNaN(value) ? 'Must be a number' : undefined;

  return (
    <BaseTaskPage
      component={
        <Form
          onSubmit={(formObj) => {
            console.log(formObj);
            router.push('/submit-an-export/about-the-waste/collection-date');
          }}
        >
          {({ handleSubmit }) => (
            <FormGroup>
              <form onSubmit={handleSubmit}>
                <H1 size="LARGE">
                  {t(TRANSLATION_KEYS.doYouKnowTheQuantityOfWaste)}
                </H1>
                <CaptionWrapper>
                  <Caption size="M">
                    {t(
                      TRANSLATION_KEYS.onlyProvideTheNetWeightOrVolumeDoNotIncludeTheWeightOfTheContainerOrVehicle,
                    )}
                  </Caption>
                </CaptionWrapper>
                <Field name="quantity-of-waste-radio" type="radio" value="yes">
                  {({ input }) => (
                    <RadiosConditional
                      {...input}
                      ariaId=""
                      renderConditional={() => (
                        <Field name="quantity-of-waste" validate={mustBeNumber}>
                          {({ input, meta }) => (
                            <QuantityInput
                              {...input}
                              errorMsg={
                                meta.error &&
                                input.value.length > 0 && <>{meta.error}</>
                              }
                              updateLaterMsg={false}
                            />
                          )}
                        </Field>
                      )}
                    >
                      {t(TRANSLATION_KEYS.yes)}
                    </RadiosConditional>
                  )}
                </Field>
                <Field
                  defaultValue="no"
                  name="quantity-of-waste-radio"
                  type="radio"
                  value="no"
                >
                  {({ input }) => (
                    <RadiosConditional
                      {...input}
                      ariaId=""
                      renderConditional={() => (
                        <Field name="quantity-of-waste" validate={mustBeNumber}>
                          {({ input, meta }) => (
                            <QuantityInput
                              {...input}
                              errorMsg={
                                meta.error &&
                                input.value.length > 0 && <>{meta.error}</>
                              }
                              updateLaterMsg={true}
                            />
                          )}
                        </Field>
                      )}
                    >
                      {t(TRANSLATION_KEYS.no)}
                    </RadiosConditional>
                  )}
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
      }
    />
  );
};

export default QuantityOfWaste;
