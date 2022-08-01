import { FC } from "react";
import { GridRow, GridCol, InputField } from "govuk-react";
import { DisplayInputFieldWrapper } from "./styled-components";

interface IProps {
    onChange?: (value: any) => any;
    input?: string;
    label?: string;
}

export const DisplayInputField: FC<IProps> = ({
    onChange,
    input,
    label
}) => {

    return (
    <GridRow>
        <GridCol setWidth="two-thirds">

        <DisplayInputFieldWrapper>
        <InputField onChange={() => {}/* onChange() */} input={{ name: input}}>{label}</InputField>
        </DisplayInputFieldWrapper>
        </GridCol>
    </GridRow>
    )

}
