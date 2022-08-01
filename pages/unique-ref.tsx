import { NextPage } from "next";

import { FormGroup, Radio, H1, Button, InputField, GridRow, GridCol } from "govuk-react";
import { Main } from "govuk-react";
import { useState } from "react";
// import { Radio } from "govuk-react";
import { Form, Field } from "react-final-form";
import { DisplayInputField } from "../components/display-input-field";
const UniqueRef: NextPage = () => {
    const [usingOwnRef, setUsingOwnRef] =  useState(false)
    const [ref, setRef] = useState('');

    return (
        <Main>    
        <GridRow> 
            <GridCol setWidth="two-thirds">  
                <FormGroup>
                    <H1 size="LARGE">Do you want to add your own reference number to this export?</H1>
                    <Radio name='unique-ref' onClick={() => setUsingOwnRef(true)}>Yes</Radio>
                    {usingOwnRef && 
                        <DisplayInputField onChange={setRef} input={'ref-number'} label={'Enter your reference number'}/>
                    }
                    <Radio name='unique-ref' onClick={() => setUsingOwnRef(false)}>No</Radio>
                    <Button onClick={() => console.log(ref)}>
                        Save and continue
                    </Button>
                    
                </FormGroup>
            </GridCol> 
        </GridRow>
        </Main>
    );
}

export default UniqueRef;