import { FormGroup, Radio, H1, GridRow, GridCol, Button } from "govuk-react";
import { Form, Field } from "react-final-form";
import { useState } from "react";
import { DisplayInputField } from "../../display-input-field";
import { ButtonWrapper } from './styled-components';

export const UniqueRefForm = () => {
    const [usingOwnRef, setUsingOwnRef] = useState(false)
    return (
        <GridRow>
            <GridCol setWidth="two-thirds">
                <Form
                    onSubmit={(formObj) => {
                        console.log(formObj);
                    }
                    }
                >
                    {({ handleSubmit }) => (
                        <FormGroup>
                            <form onSubmit={handleSubmit}>
                                <H1 size="LARGE">Do you want to add your own reference number to this export?</H1>
                                <Field name="ref-number-answer" type="radio" value="yes">
                                    {({ input }) => (
                                        <Radio {...input} onClick={() => { setUsingOwnRef(true) }}>Yes</Radio>
                                    )}
                                </Field>
                                {usingOwnRef &&
                                    <Field name="ref-number-input">
                                        {({ input }) => (
                                            <DisplayInputField {...input} label={'Enter your reference number'} />
                                        )}
                                    </Field>
                                }
                                <Field name="ref-number-answer" type="radio" value="no">
                                    {({ input }) => (
                                        <Radio {...input} onClick={() => { setUsingOwnRef(false) }}>No</Radio>
                                    )}
                                </Field>
                                <ButtonWrapper>
                                    <Button type="submit">
                                        Save and continue
                                    </Button>
                                </ButtonWrapper>
                            </form>
                        </FormGroup>
                    )}
                </Form>
            </GridCol>
        </GridRow>
    )
}