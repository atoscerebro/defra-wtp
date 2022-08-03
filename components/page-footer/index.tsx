import { Footer } from 'govuk-react';

export const PageFooter = () => {
return (

        <Footer
            copyright={{
                image: {
                height: 102,
                src: '../../govuk-crest.05968778.png',
                width: 125
                },
                link: 'https://www.nationalarchives.gov.uk/information-management/re-using-public-sector-information/uk-government-licensing-framework/crown-copyright/',
                text: 'Crown copyright'
            }}
            meta={
                <>
                    <Footer.MetaLinks>
                        <Footer.Link href="/">Accessibility statement</Footer.Link>
                        <Footer.Link href="/footer-meta-item-2">Cookies</Footer.Link>
                        <Footer.Link href="/">Privacy notice</Footer.Link>
                    </Footer.MetaLinks>
                    <Footer.MetaLinks>
                        <Footer.Link href="/">GOV.UK Prototype Kit v12.1.1</Footer.Link>
                        <Footer.Link href="/footer-meta-item-2">Clear data</Footer.Link>
                    </Footer.MetaLinks>
                </>
            }
        />
 )
}