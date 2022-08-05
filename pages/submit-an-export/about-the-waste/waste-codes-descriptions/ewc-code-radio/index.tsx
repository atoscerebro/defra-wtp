import { NextPage } from 'next';
import { H1, FormGroup, Radio, Paragraph, Caption, Button } from 'govuk-react';
import { DisplayInputField } from '../../../../../components/display-input-field';
import { BaseTaskPage } from '../../../../../components/base-task-page';
import {
  CaptionWrapper,
  ButtonWrapper,
} from '../../../../../components/form-pages/styled-components';
import { Form, Field } from 'react-final-form';
import { useRouter } from 'next/router';
import { useState } from 'react';

interface Props {
  code: string;
}

const EWCCodeRadio: NextPage<Props> = (props) => {
  const router = useRouter();
  const [usingEWCCode, setUsingEWCCode] = useState(false);
  const { code } = props;

  return (
    <BaseTaskPage
      backHref="/submit-an-export/about-the-waste/waste-codes-descriptions"
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
                <H1 size="LARGE">Do you have an EWC code?</H1>
                <CaptionWrapper>
                  <Caption size="M">
                    An EWC code (European Waste Catalogue code) is also known as
                    an EC list of waste.
                  </Caption>
                </CaptionWrapper>
                <Field name="ewc-code-radio" type="radio" value="yes">
                  {({ input }) => (
                    <Radio
                      {...input}
                      onClick={() => {
                        setUsingEWCCode(true);
                      }}
                    >
                      Yes
                    </Radio>
                  )}
                </Field>
                {usingEWCCode && (
                  <Field name="ewc-code-input">
                    {({ input }) => (
                      <DisplayInputField
                        {...input}
                        label={'Start typing, then chose from the list'}
                      />
                    )}
                  </Field>
                )}
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
    ></BaseTaskPage>
  );
};

export default EWCCodeRadio;
