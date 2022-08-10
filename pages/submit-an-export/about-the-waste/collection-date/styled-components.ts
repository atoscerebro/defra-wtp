import styled from 'styled-components';
import * as COLOURS from 'govuk-colours';
import { ErrorText } from 'govuk-react';

export const CollectionDateErrorMessage = styled(ErrorText)`
  margin-bottom: 0;
`;

export const UpdateLaterMsg = styled.div`
  color: ${COLOURS.BLACK};
`;

export const DayMonthFieldWrapper = styled.div`
    min-width: 4rem;
`;