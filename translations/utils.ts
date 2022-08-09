import { ITaskListGroup } from '../components/task-list/types';
import { IBreadcrumb } from '../components/page-breadcrumbs';

import { TFunction } from 'react-i18next';

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
    })),
  }));
