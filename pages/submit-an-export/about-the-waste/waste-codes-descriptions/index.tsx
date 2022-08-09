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

const WasteCodes: NextPage = () => {
  const [wasteCode, setWasteCode] = useState('');
  const router = useRouter();

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
                    <H1 size="LARGE">What is the waste code?</H1>
                    <CaptionWrapper>
                      <Caption size="M">Select one option.</Caption>
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
                                'Start typing, then choose from the list'
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
                                'Start typing, then choose from the list'
                              }
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
                                'Start typing, then choose from the list'
                              }
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
                                'Start typing, then choose from the list'
                              }
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
                    <Paragraph>or</Paragraph>
                    <Field
                      name="waste-code-radio"
                      type="radio"
                      value="not-applicable"
                    >
                      {({ input }) => (
                        <Radio
                          {...input}
                          name="waste-code"
                          hint="Only select this option if the waste is going to a laboratory"
                        >
                          Not applicable
                        </Radio>
                      )}
                    </Field>
                    <Button type="submit">Save and continue</Button>
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
