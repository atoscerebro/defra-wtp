import { NextPage } from 'next';
import { H1, FormGroup, Button, TextArea, UnorderedList, ListItem} from 'govuk-react';
import { BaseTaskPage } from '../../../../../components/base-task-page';
import {
  CaptionWrapper,
  ButtonWrapper,
} from '../../../../../components/form-pages/styled-components';
import { Form, Field } from 'react-final-form';
import { useRouter } from 'next/router';
import { DescribeWasteCaption } from './styled-components';

//Link to quantity-of-waste
const DescribeTheWaste: NextPage = () => {
  const router = useRouter();

  return (
    <BaseTaskPage
      backHref="/submit-an-export/about-the-waste/waste-codes-descriptions/ewc-code-summary"
      component={
        <Form
          onSubmit={(formObj) => {
            console.log(formObj);
            router.push("/submit-an-export/about-the-waste/quantity-of-waste");
          }}
        >
          {({ handleSubmit }) => (
            <FormGroup>
              <form onSubmit={handleSubmit}>
                <H1 size="LARGE">Describe the waste</H1>
                  <Field name="describe-the-waste-input">
                    {({ input }) => (
                
                      <TextArea {...input}>
                        <DescribeWasteCaption>
                        Your description could include things like:
                        </DescribeWasteCaption>
                        <UnorderedList>
                          <ListItem>
                            international specification or grade (for example, EN643 2.05.00 for paper)
                          </ListItem>
                          <ListItem>
                            polymer type for plastic (for example, LPDE film)
                          </ListItem>
                        </UnorderedList>
                      </TextArea>
                    
                    
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

export default DescribeTheWaste;
