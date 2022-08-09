import { NextPage } from 'next';
import { BaseTaskPage } from '../../../../components/base-task-page';
import { DisplayInputFieldWrapper } from '../../../../components/display-input-field/styled-components';
import { Form, Field } from 'react-final-form';
import {
  H1,
  FormGroup,
  Radio,
  Paragraph,
  Caption,
  Button,
  GridRow,
  GridCol,
  Input,
} from 'govuk-react';
import { Link } from '../../../../components/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import {
  CaptionWrapper,
  ButtonWrapper,
} from '../../../../components/form-pages/styled-components';
import { QuantityInput } from './quantity-input';
import { RadiosConditional } from '../../../../components/radios-conditional';

const QuantityOfWaste: NextPage = () => {
  const router = useRouter();

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
                <H1 size="LARGE">Do you know the quantity of waste?</H1>
                <CaptionWrapper>
                  <Caption size="M">
                    Only provide the net weight or volume. Do not include the
                    weight of the container or vehicle.
                  </Caption>
                </CaptionWrapper>
                <Field name="quantity-of-waste-radio" type="radio" value="yes">
                  {({ input }) => (
                    <RadiosConditional
                      {...input}
                      ariaId=""
                      renderConditional={() => (
                        <QuantityInput updateLaterMsg={false} />
                      )}
                    >
                      Yes
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
                        <QuantityInput updateLaterMsg={false} />
                      )}
                    >
                      No
                    </RadiosConditional>
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

export default QuantityOfWaste;