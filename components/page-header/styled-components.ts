import styled from 'styled-components';
import * as COLOURS from 'govuk-colours';
import { SPACING } from '@govuk-react/constants';

export const TranslationLinksContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const TranslationLinkButton = styled.button<{ isSelected: boolean }>`
  all: unset;
  color: ${({ isSelected }) =>
    isSelected ? COLOURS.WHITE : COLOURS.LINK_COLOUR};
  background-color: black;
  text-decoration: ${({ isSelected }) => (isSelected ? 'none' : 'underline')};
  text-decoration-thickness: max(1px, 0.0625rem);
  text-underline-offset: 0.1em;

  :hover {
    text-decoration-thickness: max(3px, 0.1875rem, 0.12em);
    text-decoration-skip-ink: none;
    text-decoration-skip: none;
    color: white;
    cursor: pointer;
  }
`;

export const TranslationSeparator = styled.span`
  padding: 0px ${SPACING.SCALE_2};
`;
