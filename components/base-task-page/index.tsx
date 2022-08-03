import {  } from "govuk-react";
import { Paragraph } from "govuk-react";
import { BackLink, Main, GridRow, GridCol, FormGroup, Link } from "govuk-react"
import {FC} from 'react'

interface IProps {
    component?: React.ReactNode;
}

export const BaseTaskPage: FC<IProps> = ({component}) => {
    return <>
        <Main>
            <GridRow>
                <GridCol setWidth="two-thirds">
                    <BackLink>Back</BackLink>
                    <FormGroup>
                    {component}
                    </FormGroup>
                    <Paragraph>[Return to submit export page](../)</Paragraph>
                </GridCol>
            </GridRow>
        </Main>
    </>
}