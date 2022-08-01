import {Crown} from '@govuk-react/icon-crown'
import { LinkWrapper } from './styled-components'
import type { NextPage } from 'next'
import { Main, Breadcrumbs, H1, Link, SectionBreak, Paragraph } from 'govuk-react'

export const HomePage: NextPage  = () => {
    return <>
        <Main>
        <Breadcrumbs>
            <Breadcrumbs.Link href="/section">
                Section
            </Breadcrumbs.Link>
            <Breadcrumbs.Link href="/section/sub-section">
                Sub-section
            </Breadcrumbs.Link>
            Current page
        </Breadcrumbs>
        
        <H1 size="XLARGE">Green list waste overview</H1>
        <SectionBreak level="LARGE" visible/>
        <H1 size="MEDIUM">Tell us about an export</H1>

        <Paragraph>
           [Submit an export](`#`)
        </Paragraph>

        <Paragraph>
            [Continue a draft export](`#`)
        </Paragraph>

        <H1 size="MEDIUM">All exports</H1>
        <Paragraph>
            [Update an export with actual details](`#`)
        </Paragraph>

        <Paragraph>
            [View submitted exports](`#`)
        </Paragraph>

        
        </Main>

        
    </>
}