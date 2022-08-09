import styled from 'styled-components';
import { H1 } from 'govuk-react';
import { FONT_SIZE } from '@govuk-react/constants';

export const DateLabelHeadingWrapper = styled(H1)`
  margin-bottom: 0;
`;

export const DateLabelWrapper = styled.div`
  margin-bottom: 1rem;
  font-size: ${FONT_SIZE.SIZE_19};
`;
