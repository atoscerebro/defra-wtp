import { NextPage } from 'next';
import { taskListGroups } from '../../payloads/task-list-groups';
import { TaskList } from '../../components/task-list';
import { GridCol, GridRow, Main, H1, LeadParagraph } from 'govuk-react';
import { useState } from 'react';
import { HeaderWrapper } from './styled-components';

const SubmitExportTaskList: NextPage = () => {
  const maxActions = 4; //temporary
  const [actionsNum, setActionNum] = useState(0);

  return (
    <Main>
      <HeaderWrapper>
        <H1 size="LARGE">Submit an export</H1>
      </HeaderWrapper>
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