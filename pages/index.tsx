import { H1, Main, SectionBreak } from 'govuk-react';
import type { NextPage } from 'next';
import { PageBreadcrumbs } from '../components/page-breadcrumbs';
import { homeCrumbs } from '../payloads/page-breadcumbs';
import { HomepageLink, LinkWrapper, HomePageGroup } from './styled-components';

import React from 'react';
import { useTranslation } from 'react-i18next';
import '../translations/i18n';

const Home: NextPage = () => {
  const { t } = useTranslation();
  return (
    <Main>
      <PageBreadcrumbs
        crumbs={homeCrumbs}
        currentPage={t('greenListWasteOverview')}
      />

      <H1 size="XLARGE">{t('greenListWasteOverview')}</H1>

      <HomePageGroup>
        <H1 size="MEDIUM">{t('tellUsAboutAnExport')}</H1>

        <LinkWrapper>
          <HomepageLink href={'submit-an-export'}>
            {t('submitAnExport')}
          </HomepageLink>
        </LinkWrapper>

        <LinkWrapper>
          <HomepageLink href={'#'}>{t('continueADraftExport')}</HomepageLink>
        </LinkWrapper>
      </HomePageGroup>

      <HomePageGroup>
        <H1 size="MEDIUM">{t('allExports')}</H1>
        <LinkWrapper>
          <HomepageLink href={'#'}>
            {t('updateAnExportWithActualDetails')}
          </HomepageLink>
        </LinkWrapper>

        <LinkWrapper>
          <HomepageLink href={'#'}>{t('viewSubmittedExports')}</HomepageLink>
        </LinkWrapper>
      </HomePageGroup>
    </Main>
  );
};

export default Home;
