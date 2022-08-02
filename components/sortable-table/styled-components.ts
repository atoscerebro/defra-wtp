import { SPACING } from '@govuk-react/constants';
import styled from 'styled-components';
import * as COLOURS from 'govuk-colours';
import { Table } from 'govuk-react';

export const SortButton = styled.button`
  cursor: pointer;
  position: relative;
  color: ${COLOURS.BLUE};
  border: unset;
  background: unset;
  padding: 0px ${SPACING.SCALE_2} 0px 0px;
  font-weight: inherit;
  text-align: inherit;
`;

export const SortHeader = styled(Table.CellHeader)`
  vertical-align: top;

  &[aria-sort] ${SortButton}:focus {
    background-color: ${COLOURS.YELLOW};
    color: ${COLOURS.BLACK};
    box-shadow: 0 -2px ${COLOURS.YELLOW}, 0 4px ${COLOURS.BLACK};
    outline: none;
  }

  &[aria-sort='none'] ${SortButton}:after {
    content: ' ▲';
    position: absolute;
    right: -1px;
    top: 1px;
    font-size: 0.5em;
  }

  &[aria-sort='none'] ${SortButton}:before {
    content: ' ▼';
    position: absolute;
    right: -1px;
    top: 9px;
    font-size: 0.5em;
  }

  &[aria-sort='ascending'] ${SortButton}:after {
    content: ' ▲';
    font-size: 0.8em;
    position: absolute;
    right: -5px;
    top: 2px;
  }

  &[aria-sort='descending'] ${SortButton}:after {
    content: ' ▼';
    font-size: 0.8em;
    position: absolute;
    right: -5px;
    top: 2px;
  }
`;
