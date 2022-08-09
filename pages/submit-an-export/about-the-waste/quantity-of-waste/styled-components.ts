import styled from 'styled-components';
import * as COLOURS from 'govuk-colours';

export const QuantityInputWrapper = styled.div`
  display: flex;
  margin-top: 0.5rem;
`;

export const InputBringToFront = styled.div`
  z-index: 9;
  min-width: 8rem;
`;

export const InputMeasurement = styled.div`
  color: #0b0c0c;
  font-family: 'GDS Transport', arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: 400;
  font-size: 19px;
  font-size: 1rem;
  line-height: 1.25;
  box-sizing: border-box;
  display: inline-block;
  min-width: 40px;
  min-width: 2.5rem;
  height: 40px;
  height: 2.5rem;
  padding: 5px;
  border: 2px solid #0b0c0c;
  border-left: 0;
  background-color: #f3f2f1;
  text-align: center;
  white-space: nowrap;
  cursor: default;
`;

export const LinkButton = styled.button`
  background-color: unset;
  border: unset;
  font-size: 19px;
  font-weight: 400;
  text-align: left;
  margin-top: 2rem;
  padding-left: 0;

  color: ${COLOURS.LINK_COLOUR};
  text-decoration: underline;
  text-decoration-thickness: max(1px, 0.0625rem);
  text-underline-offset: 0.1em;

  :hover {
    text-decoration-thickness: max(3px, 0.1875rem, 0.12em);
    text-decoration-skip-ink: none;
    text-decoration-skip: none;
  }

  :focus {
    outline: 3px solid transparent;
    color: ${COLOURS.BLACK};
    background-color: ${COLOURS.YELLOW};
    box-shadow: 0 -2px ${COLOURS.YELLOW}, 0 4px ${COLOURS.BLACK};
    text-decoration: none;
  }

  :link {
    color: ${COLOURS.LINK_COLOUR};
  }

  :visited {
    color: ${COLOURS.LINK_VISITED_COLOUR};
  }
  :hover {
    color: #003078;
  }

  :active {
    color: ${COLOURS.BLACK};
  }

  :focus {
    color: ${COLOURS.BLACK};
  }
`;

export const UpdateLaterMsg = styled.div`
  color: ${COLOURS.BLACK};
`;
