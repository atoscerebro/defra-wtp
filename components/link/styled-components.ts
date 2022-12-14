import { Link as GovUKLink } from 'govuk-react';
import styled from 'styled-components';
import * as COLOURS from 'govuk-colours';

export const StyledGovUKLink = styled(GovUKLink)`
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
