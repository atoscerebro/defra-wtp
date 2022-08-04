import { NextPage } from 'next';
import { BaseTaskPage } from '../../../../components/base-task-page'; 
import { DisplayInputField } from '../../../../components/display-input-field';
import { DisplayInputFieldWrapper } from '../../../../components/display-input-field/styled-components';
import { Form, Field } from 'react-final-form';
import { H1, FormGroup, Radio, Paragraph, Caption, Button, GridRow, GridCol, Input, Link as GovUKLink } from 'govuk-react';
import { Link as CustomLink } from '../../../../components/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { CaptionWrapper, ButtonWrapper } from '../../../../components/form-pages/styled-components';
import { InputMeasurement, QuantityInputWrapper, LinkButton, InputBringToFront } from './styled-components';
import { QuantityInput } from './quantity-input';

const QuantityOfWaste: NextPage = () => {
  const router = useRouter();
  const [knowQuantityOfWaste, setKnowQuantityOfWaste] = useState(false);

  return (
    <BaseTaskPage
      backHref="/submit-export-task-list"
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
                  Do you know the quantity of waste?
                </H1>
                <CaptionWrapper>
                      <Caption size="M">Only provide the net weight or volume. Do not include the weight of the container or vehicle.</Caption>
                </CaptionWrapper>
                <Field name="quantity-of-waste-radio" type="radio" value="yes">
                  {({ input }) => (
                    <Radio
                      {...input}
                      onClick={() => {
                        setKnowQuantityOfWaste(true);
                      }}
                    >
                      Yes
                    </Radio>
                  )}
                </Field>
                {knowQuantityOfWaste && (
                  <Field name="quantity-of-waste-input">
                    {({ input }) => (
                      <QuantityInput {...input} updateLaterMsg={false} />
                    )}
                  </Field>
                )}
                <Field
                  defaultValue="no"
                  name="quantity-of-waste-radio"
                  type="radio"
                  value="no"
                >
                  {({ input }) => (
                    <Radio
                      {...input}
                      onClick={() => {
                        setKnowQuantityOfWaste(false);
                      }}
                    >
                      No
                    </Radio>
                  )}
                </Field>
                {!knowQuantityOfWaste && (
                  <Field name="quantity-of-waste-input">
                    {({ input }) => (
                      <>
                      
                      <QuantityInput {...input} updateLaterMsg/>
                      </>
                    )}
                  </Field>
                )}
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

export default QuantityOfWaste;
