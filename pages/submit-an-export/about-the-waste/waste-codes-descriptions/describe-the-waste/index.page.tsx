import { NextPage } from 'next';
import {
  H1,
  FormGroup,
  Button,
  TextArea,
  UnorderedList,
  ListItem,
} from 'govuk-react';
import { BaseTaskPage } from '../../../../../components/base-task-page';
import { ButtonWrapper } from '../../../../../components/form-pages/styled-components';
import { Form, Field } from 'react-final-form';
import { useRouter } from 'next/router';
import { DescribeWasteCaption } from './styled-components';
import { TRANSLATION_KEYS } from '../../../../../translations/constants';
import { useTranslation } from 'react-i18next';

const DescribeTheWaste: NextPage = () => {
  const router = useRouter();
  const {t} = useTranslation();

  return (
    <BaseTaskPage
      component={
        <Form
          onSubmit={(formObj) => {
            console.log(formObj);
            router.push('/submit-an-export/about-the-waste/quantity-of-waste');
          }}
        >
          {({ handleSubmit }) => (
            <FormGroup>
              <form onSubmit={handleSubmit}>
                <H1 size="LARGE">{t(TRANSLATION_KEYS.describeTheWaste)}</H1>
                <Field name="describe-the-waste-input">
                  {({ input }) => (
                    <TextArea {...input}>
                      <DescribeWasteCaption>
                        {t(TRANSLATION_KEYS.yourDescriptionCouldIncludeThingsLike)}
                      </DescribeWasteCaption>
                      <UnorderedList>
                        <ListItem>
                          {t(TRANSLATION_KEYS.internationalSpecificationOrGradeForExampleEN643ForPaper)}
                          
                        </ListItem>
                        <ListItem>
                        {t(TRANSLATION_KEYS.polymerTypeForPlasticForExampleLpdeFilm)}
                        </ListItem>
                      </UnorderedList>
                    </TextArea>
                  )}
                </Field>
                <ButtonWrapper>
                  <Button type="submit">{t(TRANSLATION_KEYS.saveAndContinue)}</Button>
                </ButtonWrapper>
              </form>
            </FormGroup>
          )}
        </Form>
      }
    />
  );
};

export default DescribeTheWaste;
