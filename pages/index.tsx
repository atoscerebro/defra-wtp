import { H1, Main } from 'govuk-react';
import type { NextPage } from 'next';
import { PageBreadcrumbs } from '../components/page-breadcrumbs';
import { homeCrumbs } from '../payloads/page-breadcumbs';
import { HomepageLink, LinkWrapper, HomePageGroup } from './styled-components';

const Home: NextPage = () => {
  return (
    <Main>
      <PageBreadcrumbs
        crumbs={homeCrumbs}
        currentPage="Green list waste overview"
      />

      <H1 size="XLARGE">Green list waste overview</H1>

      <HomePageGroup>
        <H1 size="MEDIUM">Tell us about an export</H1>

        <LinkWrapper>
          <HomepageLink href={'submit-an-export'}>
            Submit an export
          </HomepageLink>
        </LinkWrapper>

        <LinkWrapper>
          <HomepageLink href={'#'}>Continue a draft export</HomepageLink>
        </LinkWrapper>
      </HomePageGroup>

      <HomePageGroup>
        <H1 size="MEDIUM">All exports</H1>
        <LinkWrapper>
          <HomepageLink href={'#'}>
            Update an export with actual details
          </HomepageLink>
        </LinkWrapper>

        <LinkWrapper>
          <HomepageLink href={'#'}>View submitted exports</HomepageLink>
        </LinkWrapper>
      </HomePageGroup>
    </Main>
  );
};

export default Home;
