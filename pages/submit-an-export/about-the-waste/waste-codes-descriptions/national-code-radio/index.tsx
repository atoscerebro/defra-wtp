import { NextPage } from 'next';
import {
  FormGroup,
  Radio,
  H1,
  Button,
  GridRow,
  GridCol,
  Paragraph,
  LeadParagraph,
  Caption,
} from 'govuk-react';
import { Main } from 'govuk-react';
import { useState } from 'react';
import { Form, Field } from 'react-final-form';
import { DisplayInputField } from '../../../../../components/display-input-field';
import { useRouter } from 'next/router';
import { ButtonWrapper } from '../../../../../components/form-pages/styled-components';
import { NationalCodeInputCaption } from './styled-components';
import { BaseTaskPage } from '../../../../../components/base-task-page';

//Yes or No, link to Describe-The-Waste
const NationalCodeRadio: NextPage = () => {
  const [hasNationalCode, setHasNationalCode] = useState(false);
  const router = useRouter();
  return (
    <BaseTaskPage
      component={
        <Form
          onSubmit={(formObj) => {
            console.log(formObj); //ref-number-answer: 'yes' or 'no'. (If 'yes') ref-number-input: 'reference number string'

            router.push(
              '/submit-an-export/about-the-waste/waste-codes-descriptions/describe-the-waste',
            );
          }}
        >
          {({ handleSubmit }) => (
            <FormGroup>
              <form onSubmit={handleSubmit}>
                <H1 size="LARGE">Do you have a national code?</H1>
                <Paragraph>
                  A national code is also known as a commodity code and may be
                  required by the country you&apos;re exporting to.
                </Paragraph>
                <NationalCodeInputCaption size="M">
                  It&apos;s not required by UK regulators.
                </NationalCodeInputCaption>
                <Field name="ref-number-answer" type="radio" value="yes">
                  {({ input }) => (
                    <Radio
                      {...input}
                      onClick={() => {
                        setHasNationalCode(true);
                      }}
                    >
                      Yes
                    </Radio>
                  )}
                </Field>
                {hasNationalCode && (
                  <Field name="ref-number-input">
                    {({ input }) => (
                      <DisplayInputField {...input} label={'Enter code'} />
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
                        setHasNationalCode(false);
                      }}
                    >
                      No
                    </Radio>
                  )}
                </Field>
                <ButtonWrapper>
                  <Button type="submit">Save and continue</Button>
                </ButtonWrapper>
              </form>
            </FormGroup>
          )}
        </Form>
      }
    />
  );
};

export default NationalCodeRadio;
