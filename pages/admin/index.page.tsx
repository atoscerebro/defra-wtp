import {
  ResponsiveContainer,
  BarChart,
  XAxis,
  YAxis,
  Bar,
  CartesianGrid,
  Tooltip,
  PieChart,
  Pie,
  Cell,
  Legend,
} from 'recharts';
import { NextPage } from 'next';
import { dailyUsersData, userLanguagesData } from '../../payloads/charts-data';
import { GridCol, GridRow, H4, Main } from 'govuk-react';
import { formatToolTip } from './utils';
import * as COLOURS from 'govuk-colours';
import { RESPONSIVE_7 } from '@govuk-react/constants';

const Admin: NextPage = () => {
  return (
    <Main>
      <H4>User Activity</H4>
      <GridRow margin={{ direction: 'bottom', size: 9 }}>
        <GridCol>
          <ResponsiveContainer width={'100%'} height={250}>
            <BarChart data={dailyUsersData}>
              <CartesianGrid vertical={false} />
              <Tooltip formatter={formatToolTip} />
              <XAxis axisLine={false} tickLine={false} dataKey="date" />
              <YAxis axisLine={false} tickLine={false} width={25} />
              <Bar dataKey="users" fill={COLOURS.BLUE} />
            </BarChart>
          </ResponsiveContainer>
        </GridCol>
      </GridRow>
      <GridRow margin={{ direction: 'bottom', size: 9 }}>
        <GridCol setWidth="one-half">
          <H4>User Languages</H4>
          <ResponsiveContainer width={'100%'} height={250}>
            <PieChart>
              <Legend layout="vertical" align="left" verticalAlign="middle" />
              <Pie
                data={userLanguagesData}
                dataKey="percent"
                nameKey="language"
                label={(e) => `${e.percent}%`}
              >
                {userLanguagesData.map(({ color, language }) => (
                  <Cell key={language} fill={color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </GridCol>
      </GridRow>
    </Main>
  );
};

export default Admin;
