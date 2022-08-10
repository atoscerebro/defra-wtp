import {
  ResponsiveContainer,
  BarChart,
  XAxis,
  YAxis,
  Bar,
  CartesianGrid,
  Tooltip,
} from 'recharts';
import { NextPage } from 'next';
import { dailyUsersData } from '../../payloads/charts-data';
import { H4, Main } from 'govuk-react';
import * as StyledComponents from './styled-components';
import { formatToolTip } from './utils';
import * as COLOURS from 'govuk-colours';

const Admin: NextPage = () => {
  return (
    <Main>
      <H4>User count</H4>
      <StyledComponents.ChartWrapper>
        <ResponsiveContainer width={'100%'} height={250}>
          <BarChart data={dailyUsersData}>
            <CartesianGrid vertical={false} />
            <Tooltip formatter={formatToolTip} />
            <XAxis axisLine={false} tickLine={false} dataKey="date" />
            <YAxis axisLine={false} tickLine={false} width={25} />
            <Bar dataKey="users" fill={COLOURS.BLUE} />
          </BarChart>
        </ResponsiveContainer>
      </StyledComponents.ChartWrapper>
    </Main>
  );
};

export default Admin;
