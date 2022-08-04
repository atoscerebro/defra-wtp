import { H1, H2, Main, Paragraph } from 'govuk-react';
import { NextPage } from 'next';
import { IBreadcrumb, PageBreadcrumbs } from '../components/page-breadcrumbs';
import { SummaryList } from '../components/summary-list';
import { TaskList } from '../components/task-list';
import { prenotifyCrumbs } from '../payloads/page-breadcumbs';
import { taskListGroups } from '../payloads/task-list-groups';

const Prenotify = () => {
  return (
    <Main>
      <PageBreadcrumbs
        crumbs={prenotifyCrumbs}
        currentPage="Submit an export"
      />
      <span>Your reference number:</span>
      <H1 size="LARGE">Submit an export</H1>
      <H2 size="SMALL">Submission incomplete</H2>
      <Paragraph>You have completed 0 of 4 sections.</Paragraph>
      <TaskList groups={taskListGroups} />
    </Main>
  );
};

export default Prenotify;
