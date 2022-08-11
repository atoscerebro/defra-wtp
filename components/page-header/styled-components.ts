import styled from 'styled-components';
import * as COLOURS from 'govuk-colours';

export const TranslationLinksContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const TranslationLinkDivLeft = styled.option`
  padding-right: 10%;
  color: ${COLOURS.LINK_COLOUR};
  text-decoration: underline;
  text-decoration-thickness: max(1px, 0.0625rem);
  text-underline-offset: 0.1em;

  :active {
    color: white;
    text-decoration: none;
  }

  :hover {
    text-decoration-thickness: max(3px, 0.1875rem, 0.12em);
    text-decoration-skip-ink: none;
    text-decoration-skip: none;
    color: #003078;
    cursor: pointer;
  }
`;

export const TranslationLinkDivRight = styled.option`
  padding-left: 10%;
  color: ${COLOURS.LINK_COLOUR};
  text-decoration: underline;
  text-decoration-thickness: max(1px, 0.0625rem);
  text-underline-offset: 0.1em;

  :active {
    color: white;
  }

  :hover {
    text-decoration-thickness: max(3px, 0.1875rem, 0.12em);
    text-decoration-skip-ink: none;
    text-decoration-skip: none;
    color: #003078;
    cursor: pointer;
  }

  :focus {
    outline: 3px solid transparent;
    color: ${COLOURS.BLACK};
    background-color: ${COLOURS.YELLOW};
    box-shadow: 0 -2px ${COLOURS.YELLOW}, 0 4px ${COLOURS.BLACK};
    text-decoration: none;
  }
`;
