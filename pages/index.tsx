import type { NextPage } from 'next';
import { TaskList } from '../components/task-list';
import { GridRow, GridCol, Main } from 'govuk-react';
import { SummaryList } from '../components/summary-list';
import { taskListGroups } from '../payloads/task-list-groups';
import { summaryListRows } from '../payloads/summary-list-rows';

const Home: NextPage = () => {
  return (
    <Main>
      <GridRow>
        <GridCol setWidth="two-thirds">
          <TaskList groups={taskListGroups} />
          <SummaryList rows={summaryListRows} />
        </GridCol>
      </GridRow>
    </Main>
  );
};

export default Home;
