import { SPACING, MEDIA_QUERIES, RESPONSIVE_9 } from '@govuk-react/constants';
import * as COLOURS from 'govuk-colours';
import { OrderedList, Paragraph, Tag, UnorderedList } from 'govuk-react';
import styled from 'styled-components';
import { TaskListStatus } from './types';

export const TaskList = styled(OrderedList)`
  ${MEDIA_QUERIES.TABLET} {
    min-width: 550px;
  }
`;

export const TaskListSectionNumber = styled.span`
  display: inline-block;
  min-width: ${SPACING.SCALE_5};
`;

export const TaskListItem = styled.li`
  display: flex;
  flex-direction: column;
  padding: ${SPACING.SCALE_2} 0px;
  border-bottom: 1px solid ${COLOURS.BORDER_COLOUR};

  ${MEDIA_QUERIES.TABLET} {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const TaskListItems = styled(UnorderedList)`
  margin-bottom: ${RESPONSIVE_9.mobile}px;
  & ${TaskListItem}:first-child {
    border-top: 1px solid ${COLOURS.BORDER_COLOUR};
  }

  ${MEDIA_QUERIES.TABLET} {
    padding-left: ${SPACING.SCALE_5};
    margin-bottom: ${RESPONSIVE_9.tablet}px;
  }
`;

export const TaskListParagraph = styled(Paragraph)`
  margin: 0px;
`;

export const TaskListTag = styled(Tag)<{ status: TaskListStatus }>`
  width: fit-content;
  margin-top: ${SPACING.SCALE_2};
  margin-bottom: ${SPACING.SCALE_1};
  color: ${({ status }) =>
    ({
      [TaskListStatus.CANNOT_START_YET]: COLOURS.BLACK,
      [TaskListStatus.NOT_STARTED]: COLOURS.BLACK,
      [TaskListStatus.IN_PROGRESS]: COLOURS.BLUE,
      [TaskListStatus.COMPLETED]: COLOURS.WHITE,
    }[status])};
  background: ${({ status }) =>
    ({
      [TaskListStatus.CANNOT_START_YET]: COLOURS.GREY_3,
      [TaskListStatus.NOT_STARTED]: COLOURS.GREY_3,
      [TaskListStatus.IN_PROGRESS]: COLOURS.LIGHT_BLUE_25,
      [TaskListStatus.COMPLETED]: COLOURS.BLUE,
    }[status])};

  ${MEDIA_QUERIES.TABLET} {
    margin-top: unset;
    margin-bottom: unset;
  }
`;
