import { NextPage } from "next";
import { UniqueRefForm } from "../components/form-pages/unique-ref-form";
import { FormGroup, Radio, H1, Button, InputField, GridRow, GridCol } from "govuk-react";
import { Main } from "govuk-react";
import { useState } from "react";
import { Form, Field } from "react-final-form";
import { DisplayInputField } from "../components/display-input-field";

const UniqueRef: NextPage = () => {

    return (
        <Main>    
            <UniqueRefForm />
        </Main>
    );
}

export default UniqueRef;