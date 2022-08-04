import {
  SPACING,
  MEDIA_QUERIES,
  FONT_SIZE,
  RESPONSIVE_9,
} from '@govuk-react/constants';
import * as COLOURS from 'govuk-colours';
import { Paragraph } from 'govuk-react';
import styled from 'styled-components';
import { Link } from '../link';

export const SummaryList = styled.dl`
  display: table;
  border-collapse: collapse;
  width: 100%;
  margin: unset;
  margin-bottom: ${RESPONSIVE_9.mobile}px;

  ${MEDIA_QUERIES.TABLET} {
    font-size: ${FONT_SIZE.SIZE_19};
    margin-bottom: ${RESPONSIVE_9.tablet}px;
  }
`;

export const SummaryListRow = styled.div<{
  border?: boolean;
  noActions: boolean;
}>`
  ${({ border }) =>
    border && `border-bottom: 1px solid ${COLOURS.BORDER_COLOUR}`};
  margin-bottom: ${SPACING.SCALE_3};

  ${MEDIA_QUERIES.TABLET} {
    display: table-row;
    margin-bottom: unset;

    ${({ noActions }) =>
      noActions &&
      `:after {
      display: table-cell;
      content: '';
    }`}
  }
`;

export const SummaryListKey = styled.dt`
  margin-bottom: ${SPACING.SCALE_3};
  overflow-wrap: break-word;

  ${MEDIA_QUERIES.TABLET} {
    display: table-cell;
    padding: ${SPACING.SCALE_2} ${SPACING.SCALE_4} ${SPACING.SCALE_2} 0px;
  }
`;

export const SummaryListValue = styled.dd`
  margin: unset;
  margin-bottom: ${SPACING.SCALE_3};

  ${MEDIA_QUERIES.TABLET} {
    display: table-cell;
    padding: ${SPACING.SCALE_2} ${SPACING.SCALE_4} ${SPACING.SCALE_2} 0px;
    margin: unset;
  }

  & :last-child {
    margin-bottom: unset;
  }
`;

export const SummaryListParagraph = styled(Paragraph)<{ hasMargin?: boolean }>`
  margin-bottom: ${({ hasMargin }) => (hasMargin ? SPACING.SCALE_2 : 'unset')};
`;

export const SummaryListSubParagraphContainer = styled.div`
  margin-bottom: ${SPACING.SCALE_2};
`;

export const SummaryListSubParagraph = styled(Paragraph)``;

export const SummaryListActions = styled.dd`
  margin: unset;
  margin-bottom: ${SPACING.SCALE_3};

  ${MEDIA_QUERIES.TABLET} {
    display: table-cell;
    padding: ${SPACING.SCALE_2} 0px;
  }
`;

export const SummaryListLink = styled(Link)`
  :hover {
    color: #003078;
    text-decoration-thickness: max(3px, 0.1875rem, 0.12em);
    text-decoration-skip-ink: none;
  }
  text-decoration-thickness: max(1px, 0.0625rem);
  text-underline-offset: 0.1em;
`;
