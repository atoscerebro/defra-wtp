import { HomepageLink, LinkWrapper } from '../styled-components';
import type { NextPage } from 'next';
import {
  Main,
  Breadcrumbs,
  H1,
  SectionBreak,
  GridRow,
  GridCol,
  Link,
} from 'govuk-react';
import { taskListGroups } from '../../payloads/task-list-groups';
import { summaryListRows } from '../../payloads/summary-list-rows';
import { TaskList } from '../../components/task-list';
import { SummaryList } from '../../components/summary-list';

const BreadcrumbsLink = Breadcrumbs.Link || Link;

export const HomePage: NextPage = () => {
  return (
    <Main>
      <Breadcrumbs>
        <BreadcrumbsLink href="">Waste tracking service</BreadcrumbsLink>
        <BreadcrumbsLink href="/section/sub-section">
          Green list waste overview
        </BreadcrumbsLink>
      </Breadcrumbs>

      <H1 size="XLARGE">Green list waste overview</H1>
      <SectionBreak level="LARGE" visible />
      <H1 size="MEDIUM">Tell us about an export</H1>

      <LinkWrapper>
        <HomepageLink href={'submit-an-export/unique-ref'}>Submit an export</HomepageLink>
      </LinkWrapper>

      <LinkWrapper>
        <HomepageLink href={'#'}>Continue a draft export</HomepageLink>
      </LinkWrapper>

      <H1 size="MEDIUM">All exports</H1>
      <LinkWrapper>
        <HomepageLink href={'#'}>
          Update an export with actual details
        </HomepageLink>
      </LinkWrapper>

      <LinkWrapper>
        <HomepageLink href={'#'}>View submitted exports</HomepageLink>
      </LinkWrapper>
    </Main>
  );
};
