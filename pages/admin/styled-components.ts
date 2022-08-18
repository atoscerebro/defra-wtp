import { SPACING } from '@govuk-react/constants';
import styled from 'styled-components';
import * as COLOURS from 'govuk-colours';
import { ResponsiveContainer } from 'recharts';

export const ChartContainer = styled.div`
  padding: ${SPACING.SCALE_2};
  background-color: ${COLOURS.GREY_4};
  border: 1px ${COLOURS.GREY_3} solid;
`;

export const SankeyWrapper = styled.div`
  width: 100%;
  overflow-y: hidden;
  overflow-x: auto;
`;

export const SankeyContainer = styled(ResponsiveContainer)`
  min-width: 840px;
`;
