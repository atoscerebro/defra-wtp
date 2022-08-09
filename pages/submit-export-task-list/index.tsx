import { NextPage } from 'next';
import { taskListGroups } from '../../payloads/task-list-groups';
import { TaskList } from '../../components/task-list';
import { GridCol, GridRow, Main, H1, LeadParagraph } from 'govuk-react';
import { useMemo, useState } from 'react';
import { HeaderWrapper } from './styled-components';
import { PageBreadcrumbs } from '../../components/page-breadcrumbs';
import { prenotifyCrumbs } from '../../payloads/page-breadcumbs';
import { useTranslation } from 'react-i18next';
import {
  translateCrumbs,
  translateTasklistGroups,
} from '../../translations/utils';

const SubmitExportTaskList: NextPage = () => {
  const maxActions = 4; //temporary
  const [actionsNum, setActionNum] = useState(0);
  const { t } = useTranslation();

  const translatedGroups = useMemo(
    () => translateTasklistGroups(taskListGroups, t),
    [t],
  );

  const translatedCrumbs = useMemo(
    () => translateCrumbs(prenotifyCrumbs, t),
    [t],
  );

  return (
    <Main>
      <HeaderWrapper>
        <PageBreadcrumbs
          crumbs={translatedCrumbs}
          currentPage={t('submitAnExport')}
        />
      </HeaderWrapper>
      <H1 size="LARGE">{t('submitAnExport')}</H1>
      <HeaderWrapper>
        <H1 size="SMALL">
          {actionsNum < maxActions
            ? t('submissionIncomplete')
            : t('submissionComplete')}
        </H1>
      </HeaderWrapper>
      <LeadParagraph>
        {t('youHaveCompleted') +
          ' ' +
          actionsNum +
          ' ' +
          t('of') +
          ' ' +
          maxActions +
          ' ' +
          t('sections')}
      </LeadParagraph>
      <GridCol>
        <GridRow>
          <TaskList groups={translatedGroups} />
        </GridRow>
      </GridCol>
    </Main>
  );
};

export default SubmitExportTaskList;
