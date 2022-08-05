import { SPACING, MEDIA_QUERIES } from '@govuk-react/constants';
import styled from 'styled-components';

export const RadiosConditionalWrapper = styled.div`
  margin-bottom: ${SPACING.SCALE_3};
  margin-left: 18px;
  padding-left: 33px;
  border-left: 4px solid #b1b4b6;

  ${MEDIA_QUERIES.TABLET} {
    margin-bottom: ${SPACING.SCALE_4};
  }
`;
