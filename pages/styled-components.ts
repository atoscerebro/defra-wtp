import { Link } from '../components/link';
import styled from 'styled-components';
import { FONT_SIZE, SPACING } from '@govuk-react/constants';

export const LinkWrapper = styled.div`
  margin-bottom: 1rem;
`;

export const HomepageLink = styled(Link)`
  :hover {
    color: #003078;
    text-decoration-thickness: max(3px, 0.1875rem, 0.12em);
  }
  text-decoration-thickness: max(1px, 0.0625rem);
  text-underline-offset: 0.1em;
  font-size: ${FONT_SIZE.SIZE_18};
`;

export const HomePageGroup = styled.div`
  margin-bottom: ${SPACING.SCALE_6};
`;
