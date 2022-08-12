import { Footer } from 'govuk-react';
import styled from 'styled-components';

export const StyledFooter = styled(Footer)`
  & > div > div > div > a {
    min-width: 150px;
    background-color: pink;
  }
`;
