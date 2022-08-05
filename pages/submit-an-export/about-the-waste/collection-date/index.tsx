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

const CollectionDate: NextPage = () => {
  const router = useRouter();
  const [knowCollectionDate, setKnowCollectionDate] = useState(false);

  return (
    <BaseTaskPage
      backHref="/submit-an-export/about-the-waste/quantity-of-waste"
      component={
        <Form
          onSubmit={(formObj) => {
            console.log(formObj);
            router.push('/submit-export-task-list');
          }}
        >
          {({ handleSubmit }) => (
            <FormGroup>
              <form onSubmit={handleSubmit}>
                <H1 size="LARGE">
                  Do you know when the waste will be collected?
                </H1>
                <CaptionWrapper>
                      <Caption size="M">This must be on 11 July 2022 or after.</Caption>
                </CaptionWrapper>
                <Field name="collection-date-radio" type="radio" value="yes">
                  {({ input }) => (
                    <Radio
                      {...input}
                      onClick={() => {
                        setKnowCollectionDate(true);
                      }}
                    >
                      Yes
                    </Radio>
                  )}
                </Field>
                {knowCollectionDate && (
                  <Field name="quantity-of-waste-input">
                    {({ input }) => (
                      <Input {...input}/>
                      // create new input component 
                    )}
                  </Field>
                )}
                <Field
                  defaultValue="no"
                  name="collection-date-radio"
                  type="radio"
                  value="no"
                >
                  {({ input }) => (
                    <Radio
                      {...input}
                      onClick={() => {
                        setKnowCollectionDate(false);
                      }}
                    >
                      No, I'll enter an estimate
                    </Radio>
                  )}
                </Field>
                {!knowCollectionDate && (
                  <Field name="quantity-of-waste-input">
                    {({ input }) => (
                        <Input {...input}/>
                        // create custom input component 
                
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

export default CollectionDate;

