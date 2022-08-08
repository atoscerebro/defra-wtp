import { NextPage } from 'next';
import { taskListGroups } from '../../payloads/task-list-groups';
import { TaskList } from '../../components/task-list';
import { GridCol, GridRow, Main, H1, LeadParagraph } from 'govuk-react';
import { useState } from 'react';
import { HeaderWrapper } from './styled-components';
import { PageBreadcrumbs } from '../../components/page-breadcrumbs';
import { prenotifyCrumbs } from '../../payloads/page-breadcumbs';

const SubmitExportTaskList: NextPage = () => {
  const maxActions = 4; //temporary
  const [actionsNum, setActionNum] = useState(0);

  return (
    <Main>
      <HeaderWrapper>
        <PageBreadcrumbs
          crumbs={prenotifyCrumbs}
          currentPage="Submit an export"
        />
      </HeaderWrapper>
      <H1 size="LARGE">Submit an export</H1>
      <HeaderWrapper>
        <H1 size="SMALL">
          {actionsNum < maxActions
            ? 'Submission incomplete'
            : 'Submission complete'}
        </H1>
      </HeaderWrapper>
      <LeadParagraph>
        You have completed {actionsNum} of {maxActions} sections
      </LeadParagraph>
      <GridCol>
        <GridRow>
          <TaskList groups={taskListGroups} />
        </GridRow>
      </GridCol>
    </Main>
  );
};

export default SubmitExportTaskList;
