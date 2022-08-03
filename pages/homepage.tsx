import { Crown } from '@govuk-react/icon-crown';
import { HomepageLink, LinkWrapper } from './styled-components';
import type { NextPage } from 'next';
import {
  Main,
  Breadcrumbs,
  H1,
  SectionBreak,
  Paragraph,
  GridRow,
  GridCol,
} from 'govuk-react';
import { taskListGroups } from '../payloads/task-list-groups';
import { summaryListRows } from '../payloads/summary-list-rows';
import { TaskList } from '../components/task-list';
import { SummaryList } from '../components/summary-list';

export const HomePage: NextPage = () => {
  return (
    <Main>
      <Breadcrumbs>
        <Breadcrumbs.Link href="">Waste tracking service</Breadcrumbs.Link>
        <Breadcrumbs.Link href="/section/sub-section">
          Green list waste overview
        </Breadcrumbs.Link>
      </Breadcrumbs>

      <H1 size="XLARGE">Green list waste overview</H1>
      <SectionBreak level="LARGE" visible />
      <H1 size="MEDIUM">Tell us about an export</H1>

      <LinkWrapper>
        <HomepageLink href={'submit-an-export'}>Submit an export</HomepageLink>
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

      <GridRow>
        <GridCol setWidth="two-thirds">
          <TaskList groups={taskListGroups} />
          <SummaryList rows={summaryListRows} />
        </GridCol>
      </GridRow>
    </Main>
  );
};
