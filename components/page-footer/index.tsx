import { Footer } from 'govuk-react';
import { useTranslation } from 'react-i18next';

export const PageFooter = () => {
  const { t } = useTranslation();

  return (
    <Footer
      copyright={{
        image: {
          height: 102,
          src: '../../govuk-crest.05968778.png',
          width: 125,
        },
        link: 'https://www.nationalarchives.gov.uk/information-management/re-using-public-sector-information/uk-government-licensing-framework/crown-copyright/',
        text: t('crownCopyright'),
      }}
      meta={
        <>
          <Footer.MetaLinks heading="Support Links">
            <Footer.Link href="/">
              {t('accessibilityStatement') as string}
            </Footer.Link>
            <Footer.Link href="/footer-meta-item-2">
              {t('cookies') as string}
            </Footer.Link>
            <Footer.Link href="/">{t('privacyNotice') as string}</Footer.Link>
          </Footer.MetaLinks>
          <Footer.MetaLinks heading="Support Links">
            <Footer.Link href="/">{t('change') as string}</Footer.Link>
            <Footer.Link href="/footer-meta-item-2">
              {t('clearData') as string}
            </Footer.Link>
          </Footer.MetaLinks>
        </>
      }
    />
  );
};
