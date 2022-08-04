import { FC } from 'react';
import { Heading } from 'govuk-react';
import { ITaskListGroup, TaskListStatus } from './types';
import * as StyledComponents from './styled-components';
import { Link } from '../link';

export interface ITaskListProps {
  groups: ITaskListGroup[];
}

export const TaskList: FC<ITaskListProps> = ({ groups }) => {
  return (
    <StyledComponents.TaskList listStyleType="none">
      {groups.map((group, i) => (
        <li key={group.title}>
          <Heading key={group.title} size="MEDIUM">
            <StyledComponents.TaskListSectionNumber>
              {i + 1}.
            </StyledComponents.TaskListSectionNumber>
            {group.title}
          </Heading>
          <StyledComponents.TaskListItems listStyleType="none">
            {group.sections.map((section) => (
              <StyledComponents.TaskListItem key={section.title}>
                {section.status === TaskListStatus.CANNOT_START_YET ? (
                  <StyledComponents.TaskListParagraph>
                    {section.title}
                  </StyledComponents.TaskListParagraph>
                ) : (
                  <Link href={section.link}>{section.title}</Link>
                )}
                <StyledComponents.TaskListTag status={section.status}>
                  {section.status}
                </StyledComponents.TaskListTag>
              </StyledComponents.TaskListItem>
            ))}
          </StyledComponents.TaskListItems>
        </li>
      ))}
    </StyledComponents.TaskList>
  );
};
