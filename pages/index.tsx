import type { NextPage } from 'next';
import { TaskList } from '../components/task-list';
import { GridRow, GridCol, Main } from 'govuk-react';
import { SummaryList } from '../components/summary-list';
import { taskListGroups } from '../payloads/task-list-groups';
import { summaryListRows } from '../payloads/summary-list-rows';
import { SortableTable } from '../components/sortable-table';
import { headers, tableRows } from '../payloads/sortable-table-data';

const Home: NextPage = () => {
  return (
    <Main>
      <GridRow>
        <GridCol setWidth="two-thirds">
          <TaskList groups={taskListGroups} />
          <SummaryList rows={summaryListRows} />
          <SortableTable headers={headers} rows={tableRows}>
            {({ actionCell }) => (
              <>
                {actionCell.action === 'link' && <a>{actionCell.text}</a>}
                {actionCell.action === 'button' && (
                  <button>{actionCell.text}</button>
                )}
              </>
            )}
          </SortableTable>
        </GridCol>
      </GridRow>
    </Main>
  );
};

export default Home;
