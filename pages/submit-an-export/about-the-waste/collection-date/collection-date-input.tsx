import { GridCol, GridRow, Paragraph, InputField, LabelText, Fieldset, HintText} from 'govuk-react';
import { FC } from 'react';
import {
  UpdateLaterMsg,
  CollectionDateErrorMessage,
  DayMonthFieldWrapper,
} from './styled-components';
import { Field } from 'react-final-form';

interface IProps {
  updateLaterMsg?: boolean;
  errorMsg?: React.ReactNode
}

export const CollectionDateInput: FC<IProps> = ({updateLaterMsg, errorMsg, ...input}) => {
  return (
    <GridRow>
      <GridCol setWidth="two-thirds">
        <UpdateLaterMsg>
          {updateLaterMsg && <Paragraph>You&apos;ll need to update this with actual details as soon as possible after submitting this export.</Paragraph>}
        </UpdateLaterMsg>
          {updateLaterMsg ? <LabelText>Enter an estimate date</LabelText> : <LabelText>Enter the date</LabelText>}
          <HintText>For example, 25 9 2022</HintText>
        <CollectionDateErrorMessage>
            {errorMsg}
        </CollectionDateErrorMessage>

        <GridRow>
          <GridCol setWidth="one-third">
              <Fieldset>
                <GridRow>
                    <GridCol setWidth="one-third">
                        <DayMonthFieldWrapper>
                        <Field name="collection-date.day">
                        {({ input }) => (
                            <InputField {...input}>Day</InputField>
                        )}
                        </Field>
                        </DayMonthFieldWrapper>
                    </GridCol>
                    <GridCol setWidth="one-third">
                        <DayMonthFieldWrapper>
                            <Field name="collection-date.month">
                                {({ input }) => (
                                    <InputField {...input}>Month</InputField> 
                                )}
                            </Field>
                        </DayMonthFieldWrapper>
                    </GridCol>
                    <GridCol setWidth="one-half">
                        <Field name="collection-date.year">
                        {({ input }) => (
                            <InputField {...input}>Year</InputField> 
                            )}
                            </Field>
                    </GridCol>
                </GridRow>
              </Fieldset>
          </GridCol>
        </GridRow>
      </GridCol>
    </GridRow>
  );
};