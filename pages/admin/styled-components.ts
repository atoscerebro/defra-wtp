import { SPACING } from '@govuk-react/constants';
import styled from 'styled-components';
import * as COLOURS from 'govuk-colours';

export const ChartContainer = styled.div`
  padding: ${SPACING.SCALE_2};
  background-color: ${COLOURS.GREY_4};
  border: 1px ${COLOURS.GREY_3} solid;
`;
