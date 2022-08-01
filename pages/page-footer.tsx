import {
    Footer
} from 'govuk-react'
import { FooterWrapper } from './styled-components'

export const PageFooter = () => {
return (
    <FooterWrapper>

        <Footer
            // copyright={{
            //     image: {
            //     height: 102,
            //     src: 'static/media/govuk-crest.05968778.png',
            //     width: 125
            //     },
            //     link: 'https://www.nationalarchives.gov.uk/information-management/re-using-public-sector-information/uk-government-licensing-framework/crown-copyright/',
            //     text: 'Crown copyright'
            // }}
        />
    </FooterWrapper>
 )
}