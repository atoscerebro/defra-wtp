import { NextPage } from 'next';
import { H1, FormGroup, Radio, Paragraph, Caption, Button } from 'govuk-react';
import { DisplayInputField } from '../../../../components/display-input-field';
import { BaseTaskPage } from '../../../../components/base-task-page';
import { useState } from 'react';
import { CaptionWrapper } from '../../../../components/form-pages/styled-components';
import { WASTE_CODES_LABELS } from '../../../../components/form-pages/constants';
import { Form, Field } from 'react-final-form';
import { useRouter } from 'next/router';


const WasteCodes: NextPage = () => {
  const [wasteCode, setWasteCode] = useState('');
  const router = useRouter();

  return (
    <>
      <BaseTaskPage
        backHref="/submit-export-task-list"
        component={
          <>
            <Form
              onSubmit={(formObj) => {
                console.log(formObj);
                router.push('/submit-an-export/about-the-waste/waste-codes-descriptions/ewc-code-radio');
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
                        <Radio
                          {...input}
                          name="waste-code"
                          onClick={() =>
                            setWasteCode(WASTE_CODES_LABELS.BASEL_ANNEX_IX)
                          }
                        >
                          {WASTE_CODES_LABELS.BASEL_ANNEX_IX}
                        </Radio>
                      )}
                    </Field>
                    {wasteCode === WASTE_CODES_LABELS.BASEL_ANNEX_IX && (
                      <Field name="waste-code-input">
                        {({ input }) => (
                          <DisplayInputField
                            {...input}
                            label={'Start typing, then choose from the list'}
                          />
                        )}
                      </Field>
                    )}
                    <Field
                      name="waste-code-radio"
                      type="radio"
                      value={WASTE_CODES_LABELS.OECD}
                    >
                      {({ input }) => (
                        <Radio
                          {...input}
                          name="waste-code"
                          onClick={() => setWasteCode(WASTE_CODES_LABELS.OECD)}
                        >
                          {WASTE_CODES_LABELS.OECD}
                        </Radio>
                      )}
                    </Field>
                    {wasteCode === WASTE_CODES_LABELS.OECD && (
                      <Field name="waste-code-input">
                        {({ input }) => (
                          <DisplayInputField
                            {...input}
                            label={'Start typing, then choose from the list'}
                          />
                        )}
                      </Field>
                    )}
                    <Field
                      name="waste-code-radio"
                      type="radio"
                      value={WASTE_CODES_LABELS.ANNEX_IIIA}
                    >
                      {({ input }) => (
                        <Radio
                          {...input}
                          name="waste-code"
                          onClick={() =>
                            setWasteCode(WASTE_CODES_LABELS.ANNEX_IIIA)
                          }
                        >
                          {WASTE_CODES_LABELS.ANNEX_IIIA}
                        </Radio>
                      )}
                    </Field>
                    {wasteCode === WASTE_CODES_LABELS.ANNEX_IIIA && (
                      <Field name="waste-code-input">
                        {({ input }) => (
                          <DisplayInputField
                            {...input}
                            label={'Start typing, then choose from the list'}
                          />
                        )}
                      </Field>
                    )}

                    <Field
                      name="waste-code-radio"
                      type="radio"
                      value={WASTE_CODES_LABELS.ANNEX_IIIB}
                    >
                      {({ input }) => (
                        <Radio
                          {...input}
                          name="waste-code"
                          onClick={() =>
                            setWasteCode(WASTE_CODES_LABELS.ANNEX_IIIB)
                          }
                        >
                          {WASTE_CODES_LABELS.ANNEX_IIIB}
                        </Radio>
                      )}
                    </Field>
                    {wasteCode === WASTE_CODES_LABELS.ANNEX_IIIB && (
                      <Field name="waste-code-input">
                        {({ input }) => (
                          <DisplayInputField
                            {...input}
                            label={'Start typing, then choose from the list'}
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
