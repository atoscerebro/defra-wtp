import { render } from '@testing-library/react';
import { TaskList } from '.';
import { TRANSLATION_KEYS } from '../../translations/constants';
import { TaskListStatus } from './types';

const groups = [
  {
    title: 'About the waste',
    sections: [
      {
        title: 'Waste codes and descriptions',
        link: '/',
        status: {
          label: TRANSLATION_KEYS.completed,
          value: TaskListStatus.COMPLETED,
        },
      },
      {
        title: 'Quantity of waste',
        link: '/',
        status: {
          label: TRANSLATION_KEYS.cannotStart,
          value: TaskListStatus.CANNOT_START_YET,
        },
      },
    ],
  },
  {
    title: 'Exporter and importer',
    sections: [
      {
        title: 'Exporter details',
        link: '/',
        status: {
          label: TRANSLATION_KEYS.inProgress,
          value: TaskListStatus.IN_PROGRESS,
        },
      },
      {
        title: 'Importer details',
        link: '/',
        status: {
          label: TRANSLATION_KEYS.inProgress,
          value: TaskListStatus.IN_PROGRESS,
        },
      },
      {
        title: 'Collection date',
        link: '/',
        status: {
          label: TRANSLATION_KEYS.cannotStart,
          value: TaskListStatus.CANNOT_START_YET,
        },
      },
    ],
  },
];

describe('TaskList Component', () => {
  it('should render all the group and section titles', () => {
    const { getByText } = render(<TaskList groups={groups} />);

    groups.forEach((group) => {
      expect(getByText(group.title)).toBeInTheDocument();
      group.sections.forEach((section) =>
        expect(getByText(section.title)).toBeInTheDocument(),
      );
    });
  });

  it('should prevent link when tag status is cannot start yet', () => {
    const { links, notLinks } = groups.reduce(
      (out: { links: string[]; notLinks: string[] }, curr) => {
        curr.sections.forEach((section) =>
          section.status.value === TaskListStatus.CANNOT_START_YET
            ? out.notLinks.push(section.title)
            : out.links.push(section.title),
        );
        return out;
      },
      { links: [], notLinks: [] },
    );

    const { getByText } = render(<TaskList groups={groups} />);

    for (let i = 0; i < links.length; i++) {
      const element = getByText(links[i]);
      expect(element).toHaveAttribute('href');
    }

    for (let i = 0; i < notLinks.length; i++) {
      const element = getByText(notLinks[i]);
      expect(element).not.toHaveAttribute('href');
    }
  });
});
