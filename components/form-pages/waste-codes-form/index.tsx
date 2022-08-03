import { H1, FormGroup, Radio, Paragraph, Caption, Button } from 'govuk-react';
import { DisplayInputField } from '../../display-input-field';
import { BaseTaskPage } from '../../base-task-page';
import { useState } from 'react';
import { CaptionWrapper } from './styled-components';
import { WASTE_CODES_LABELS } from './constants';
import { Form, Field } from 'react-final-form';
import { useRouter } from 'next/router';

const WasteCodes = () => {
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

                router.push(''); // TODO
              }}
            >
              {({ handleSubmit }) => (
                <FormGroup>
                  <form onSubmit={handleSubmit}>
                    <H1 size="LARGE">What is the waste code?</H1>
                    <CaptionWrapper>
                      <Caption size="M">Select one option.</Caption>
                    </CaptionWrapper>
                    <Field name="waste-code-answer" type="radio" value="yes">
                      {({ input }) => (
                        <Radio
                          {...input}
                          name="waste-codes"
                          onClick={() =>
                            setWasteCode(WASTE_CODES_LABELS.BASEL_ANNEX_IX)
                          }
                        >
                          {WASTE_CODES_LABELS.BASEL_ANNEX_IX}
                        </Radio>
                      )}
                    </Field>
                    {wasteCode === WASTE_CODES_LABELS.BASEL_ANNEX_IX && (
                      <Field name="ref-number">
                        {({ input }) => (
                          <DisplayInputField
                            {...input}
                            label={'Start typing, then choose from the list'}
                          />
                        )}
                      </Field>
                    )}
                    <Field name="waste-code-answer" type="radio" value="yes">
                      {({ input }) => (
                        <Radio
                          {...input}
                          name="waste-codes"
                          onClick={() => setWasteCode(WASTE_CODES_LABELS.OECD)}
                        >
                          {WASTE_CODES_LABELS.OECD}
                        </Radio>
                      )}
                    </Field>
                    {wasteCode === WASTE_CODES_LABELS.OECD && (
                      <Field name="">
                        {({ input }) => (
                          <DisplayInputField
                            {...input}
                            label={'Start typing, then choose from the list'}
                          />
                        )}
                      </Field>
                    )}
                    <Field name="waste-code-answer" type="radio" value="yes">
                      {({ input }) => (
                        <Radio
                          {...input}
                          name="waste-codes"
                          onClick={() =>
                            setWasteCode(WASTE_CODES_LABELS.BASEL_ANNEX_IX)
                          }
                        >
                          {WASTE_CODES_LABELS.BASEL_ANNEX_IX}
                        </Radio>
                      )}
                    </Field>
                    {wasteCode === WASTE_CODES_LABELS.BASEL_ANNEX_IX && (
                      <Field name="ref-number">
                        {({ input }) => (
                          <DisplayInputField
                            {...input}
                            label={'Start typing, then choose from the list'}
                          />
                        )}
                      </Field>
                    )}
                    <Radio
                      name="waste-codes"
                      onClick={() =>
                        setWasteCode(WASTE_CODES_LABELS.ANNEX_IIIA)
                      }
                    >
                      {WASTE_CODES_LABELS.ANNEX_IIIA}
                    </Radio>
                    {wasteCode === WASTE_CODES_LABELS.ANNEX_IIIA && (
                      <DisplayInputField
                        onChange={setWasteCode}
                        input={'ref-number'}
                        label={'Start typing, then choose from the list'}
                      />
                    )}
                    <Radio
                      name="waste-codes"
                      onClick={() =>
                        setWasteCode(WASTE_CODES_LABELS.ANNEX_IIIB)
                      }
                    >
                      {WASTE_CODES_LABELS.ANNEX_IIIB}
                    </Radio>
                    {wasteCode === WASTE_CODES_LABELS.ANNEX_IIIB && (
                      <DisplayInputField
                        onChange={setWasteCode}
                        input={'ref-number'}
                        label={'Start typing, then choose from the list'}
                      />
                    )}
                    <Paragraph>or</Paragraph>
                    <Radio
                      name="waste-codes"
                      hint="Only select this option if the waste is going to a laboratory"
                    >
                      Not applicable
                    </Radio>
                    <Button>Save and continue</Button>
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
