import styled from 'styled-components';
import { StyledGovUKLink } from '../link/styled-components';
import { FONT_SIZE } from '@govuk-react/constants';

export const LinkButton = styled(StyledGovUKLink)`
  display: block;
  cursor: pointer;
  background: unset;
  border: unset;
  padding: unset;
  font-size: ${FONT_SIZE.SIZE_19};
`;
