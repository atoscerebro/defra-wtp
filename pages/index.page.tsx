import { H1, Main } from 'govuk-react';
import type { NextPage } from 'next';
import { AddressForm } from '../components/address-form';
import { PageBreadcrumbs } from '../components/page-breadcrumbs';
import { homeCrumbs } from '../payloads/page-breadcumbs';
import { HomepageLink, LinkWrapper, HomePageGroup } from './styled-components';
import React, { useMemo } from 'react';
import { translateCrumbs } from '../translations/utils';
import { useTranslation } from 'react-i18next';
import '../translations/i18n';
import { TRANSLATION_KEYS } from '../translations/constants';

const Home: NextPage = () => {
  const { t } = useTranslation();

  const translatedCrumbs = useMemo(() => translateCrumbs(homeCrumbs, t), [t]);

  return (
    <Main>
      <PageBreadcrumbs
        crumbs={translatedCrumbs}
        currentPage={t(TRANSLATION_KEYS.greenListWasteOverview)}
      />

      <H1 size="XLARGE">{t(TRANSLATION_KEYS.greenListWasteOverview)}</H1>

      <HomePageGroup>
        <H1 size="MEDIUM">{t(TRANSLATION_KEYS.tellUsAboutAnExport)}</H1>

        <LinkWrapper>
          <HomepageLink href={'submit-an-export/unique-ref'}>
            {t(TRANSLATION_KEYS.submitAnExport)}
          </HomepageLink>
        </LinkWrapper>

        <LinkWrapper>
          <HomepageLink href={'#/'}>
            {t(TRANSLATION_KEYS.continueADraftExport)}
          </HomepageLink>
        </LinkWrapper>
      </HomePageGroup>

      <HomePageGroup>
        <H1 size="MEDIUM">{t(TRANSLATION_KEYS.allExports)}</H1>
        <LinkWrapper>
          <HomepageLink href={'#'}>
            {t(TRANSLATION_KEYS.updateAnExportWithActualDetails)}
          </HomepageLink>
        </LinkWrapper>

        <LinkWrapper>
          <HomepageLink href={'#'}>
            {t(TRANSLATION_KEYS.viewSubmittedExports)}
          </HomepageLink>
        </LinkWrapper>
      </HomePageGroup>
    </Main>
  );
};

export default Home;
