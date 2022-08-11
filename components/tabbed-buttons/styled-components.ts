import {
  MEDIA_QUERIES,
  RESPONSIVE_4,
  RESPONSIVE_7,
  FONT_SIZE,
} from '@govuk-react/constants';
import styled from 'styled-components';
import * as COLOURS from 'govuk-colours';

export const TabbedButtonsContainer = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: ${RESPONSIVE_4.mobile}px;

  & :not(:last-child) {
    margin-right: ${RESPONSIVE_7.mobile}px;
  }

  ${MEDIA_QUERIES.TABLET} {
    margin-bottom: ${RESPONSIVE_4.tablet}px;
    & :not(:last-child) {
      margin-right: ${RESPONSIVE_7.tablet}px;
    }
  }
`;

export const TabbedButton = styled.button<{ active: boolean }>`
  border: unset;
  background: unset;
  padding: unset;
  cursor: pointer;
  color: ${COLOURS.BLUE};
  font-size: ${({ active }) =>
    active ? FONT_SIZE.SIZE_20 : FONT_SIZE.SIZE_19};
  font-weight: ${({ active }) => (active ? 'bold' : 'normal')};
  border-bottom: ${({ active }) => (active ? '4px solid' : 'none')};

  :hover {
    color: ${({ active }) => (active ? COLOURS.BLUE : '#003078')};
  }
`;
