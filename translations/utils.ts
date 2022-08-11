import { ITaskListGroup } from '../components/task-list/types';
import { IBreadcrumb } from '../components/page-breadcrumbs';

import { TFunction } from 'react-i18next';
import { IRow } from '../components/summary-list/types';

export const translateCrumbs = (
  breadcrumbs: IBreadcrumb[],
  t: TFunction<'translation', undefined>,
) =>
  breadcrumbs.map((breadcrumb) => ({
    ...breadcrumb,
    label: t(breadcrumb.label),
  }));

export const translateTasklistGroups = (
  groups: ITaskListGroup[],
  t: TFunction<'translation', undefined>,
) =>
  groups.map((group) => ({
    ...group,
    title: t(group.title),
    sections: group.sections.map((section) => ({
      ...section,
      title: t(section.title),
      status: {
        ...section.status,
        label: t(section.status.label),
      },
    })),
  }));

export const translateSummaryListRows = (
  rows: IRow[],
  t: TFunction<'translation', undefined>,
) =>
  rows.map((row) => ({
    key: t(row.key),
    value:
      typeof row.value === 'string'
        ? t(row.value)
        : row.value.map((sub) =>
            typeof sub === 'string' ? t(sub) : sub.map((seg) => t(seg)),
          ),
    action:
      row.action &&
      row.action.map((action) => ({ ...action, title: t(action.title) })),
  }));
