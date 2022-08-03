import { SPACING } from '@govuk-react/constants';
import styled from 'styled-components';
import * as COLOURS from 'govuk-colours';
import { Table } from 'govuk-react';
import { FormatType } from './types';

export const SortTableButton = styled.button`
  cursor: pointer;
  position: relative;
  color: ${COLOURS.BLUE};
  border: unset;
  background: unset;
  padding: 0px ${SPACING.SCALE_2} 0px 0px;
  font-weight: inherit;
  text-align: inherit;
`;

export const SortTableCellHeader = styled(Table.CellHeader)<{
  formatType?: FormatType;
}>`
  vertical-align: top;
  ${({ formatType }) => formatType === 'numeric' && `text-align: right;`}
`;

export const SortTableSortHeader = styled(SortTableCellHeader)`
  &[aria-sort] ${SortTableButton}:focus {
    background-color: ${COLOURS.YELLOW};
    color: ${COLOURS.BLACK};
    box-shadow: 0 -2px ${COLOURS.YELLOW}, 0 4px ${COLOURS.BLACK};
    outline: none;
  }

  &[aria-sort='none'] ${SortTableButton}:after {
    content: ' ▲';
    position: absolute;
    right: -1px;
    top: 1px;
    font-size: 0.5em;
  }

  &[aria-sort='none'] ${SortTableButton}:before {
    content: ' ▼';
    position: absolute;
    right: -1px;
    top: 9px;
    font-size: 0.5em;
  }

  &[aria-sort='ascending'] ${SortTableButton}:after {
    content: ' ▲';
    font-size: 0.8em;
    position: absolute;
    right: -5px;
    top: 2px;
  }

  &[aria-sort='descending'] ${SortTableButton}:after {
    content: ' ▼';
    font-size: 0.8em;
    position: absolute;
    right: -5px;
    top: 2px;
  }
`;

export const SortTableCell = styled(Table.Cell)<{ formatType?: FormatType }>`
  ${({ formatType }) =>
    formatType === 'numeric' &&
    `@supports (font-variant-numeric: tabular-nums) {
    font-feature-settings: normal;
    font-variant-numeric: tabular-nums;
  } 
  
  text-align: right;`}
`;
