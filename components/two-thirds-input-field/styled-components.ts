import { InputField } from 'govuk-react';
import styled from 'styled-components';
import { MEDIA_QUERIES } from '@govuk-react/constants';

export const TwoThirdsInputField = styled(InputField)`
  ${MEDIA_QUERIES.TABLET} {
    width: 66.66%;
  }
`;
