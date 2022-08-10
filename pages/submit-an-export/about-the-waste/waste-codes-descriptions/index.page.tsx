import { NextPage } from 'next';
import {
  H1,
  FormGroup,
  Radio,
  Paragraph,
  Caption,
  Button,
  LabelText,
} from 'govuk-react';
import { BaseTaskPage } from '../../../../components/base-task-page';
import { useState } from 'react';
import { CaptionWrapper } from '../../../../components/form-pages/styled-components';
import {
  WASTE_CODES_LABELS,
  baselAnnexIX,
  oecd,
  annexIIIA,
  annexIIIB,
} from '../../../../components/form-pages/constants';
import { Form, Field } from 'react-final-form';
import { useRouter } from 'next/router';
import { AccessibleAutocomplete } from '../../../../components/accessible-autocomplete/accessible-autocomplete';
import { RadiosConditional } from '../../../../components/radios-conditional';
import { useTranslation } from 'react-i18next';
import { TRANSLATION_KEYS } from '../../../../translations/constants';

const WasteCodes: NextPage = () => {
  const [wasteCode, setWasteCode] = useState('');
  const router = useRouter();
  const {t} = useTranslation();

  return (
    <>
      <BaseTaskPage
        component={
          <>
            <Form
              onSubmit={(formObj) => {
                console.log(formObj);
                router.push(
                  '/submit-an-export/about-the-waste/waste-codes-descriptions/ewc-code-radio',
                );
              }}
            >
              {({ handleSubmit }) => (
                <FormGroup>
                  <form onSubmit={handleSubmit}>
                    <H1 size="LARGE">{t(TRANSLATION_KEYS.whatIsTheWasteCode)}</H1>
                    <CaptionWrapper>
                      <Caption size="M">{t(TRANSLATION_KEYS.selectOneOption)}</Caption>
                    </CaptionWrapper>
                    <Field
                      name="waste-code-radio"
                      type="radio"
                      value={WASTE_CODES_LABELS.BASEL_ANNEX_IX}
                    >
                      {({ input }) => (
                        <RadiosConditional
                          {...input}
                          ariaId={''}
                          renderConditional={() => (
                            <AccessibleAutocomplete
                              {...input}
                              options={baselAnnexIX}
                              hintText={
                                t(TRANSLATION_KEYS.startTypingThenChooseFromTheList)
                              }
                            />
                          )}
                        >
                          {WASTE_CODES_LABELS.BASEL_ANNEX_IX}
                        </RadiosConditional>
                      )}
                    </Field>
                    <Field
                      name="waste-code-radio"
                      type="radio"
                      value={WASTE_CODES_LABELS.OECD}
                    >
                      {({ input }) => (
                        <RadiosConditional
                          {...input}
                          ariaId={''}
                          renderConditional={() => (
                            <AccessibleAutocomplete
                              {...input}
                              options={oecd}
                              hintText={
                                t(TRANSLATION_KEYS.startTypingThenChooseFromTheList)                              }
                            />
                          )}
                        >
                          {WASTE_CODES_LABELS.OECD}
                        </RadiosConditional>
                      )}
                    </Field>
                    <Field
                      name="waste-code-radio"
                      type="radio"
                      value={WASTE_CODES_LABELS.ANNEX_IIIA}
                    >
                      {({ input }) => (
                        <RadiosConditional
                          {...input}
                          ariaId={''}
                          renderConditional={() => (
                            <AccessibleAutocomplete
                              {...input}
                              options={annexIIIA}
                              hintText={
                                t(TRANSLATION_KEYS.startTypingThenChooseFromTheList)                              }
                            />
                          )}
                        >
                          {WASTE_CODES_LABELS.ANNEX_IIIA}
                        </RadiosConditional>
                      )}
                    </Field>
                    <Field
                      name="waste-code-radio"
                      type="radio"
                      value={WASTE_CODES_LABELS.ANNEX_IIIB}
                    >
                      {({ input }) => (
                        <RadiosConditional
                          {...input}
                          ariaId={''}
                          renderConditional={() => (
                            <AccessibleAutocomplete
                              {...input}
                              options={annexIIIB}
                              hintText={
                                t(TRANSLATION_KEYS.startTypingThenChooseFromTheList)                              }
                            />
                          )}
                        >
                          {WASTE_CODES_LABELS.ANNEX_IIIB}
                        </RadiosConditional>
                      )}
                    </Field>
                    {wasteCode === WASTE_CODES_LABELS.ANNEX_IIIB && (
                      <Field name="waste-code-input">
                        {({ input }) => (
                          <AccessibleAutocomplete
                            {...input}
                            options={baselAnnexIX}
                          />
                        )}
                      </Field>
                    )}
                    <Paragraph>{t(TRANSLATION_KEYS.or) as string}</Paragraph>
                    <Field
                      name="waste-code-radio"
                      type="radio"
                      value="not-applicable"
                    >
                      {({ input }) => (
                        <Radio
                          {...input}
                          name="waste-code"
                          hint={t(TRANSLATION_KEYS.onlySelectThisOptionIfTheWasteIsGoingToALaboratory)}
                        >
                         {t(TRANSLATION_KEYS.notApplicable)}
                        </Radio>
                      )}
                    </Field>
                    <Button type="submit">{t(TRANSLATION_KEYS.saveAndContinue)}</Button>
                  </form>
                </FormGroup>
              )}
            </Form>
          </>
        }
      />
    </>
  );
};

export default WasteCodes;
