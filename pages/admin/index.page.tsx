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
  Sankey,
} from 'recharts';
import { NextPage } from 'next';
import {
  dailyUsersData,
  dailyExporterJourneysData,
  userLanguagesData,
  weeklyUsersData,
  yearlyUsersData,
  weeklyExporterJourneysData,
  monthlyExporterJourneysData,
} from '../../payloads/charts-data';
import { GridCol, GridRow, H4, Main } from 'govuk-react';
import { formatUniqueUsersToolTip, formatUserLanguagesToolTip } from './utils';
import * as COLOURS from 'govuk-colours';
import { TabbedButtons } from '../../components/tabbed-buttons';
import { durationTypes } from './constants';
import { useState } from 'react';
import { ChartContainer } from './styled-components';

const Admin: NextPage = () => {
  const [userCountKey, setUserCountKey] = useState(durationTypes[0]);
  const [exporterJourneyKey, setExporterJourneyKey] = useState(
    durationTypes[0],
  );
  const userCountData = {
    Week: dailyUsersData,
    Month: weeklyUsersData,
    Year: yearlyUsersData,
  }[userCountKey];
  const exporterJourneysData = {
    Week: dailyExporterJourneysData,
    Month: weeklyExporterJourneysData,
    Year: monthlyExporterJourneysData,
  }[exporterJourneyKey];

  return (
    <Main>
      <GridRow margin={{ direction: 'bottom', size: 9 }}>
        <GridCol setWidth="full">
          <ChartContainer>
            <H4>Unique Users</H4>
            <TabbedButtons
              current={userCountKey}
              keys={durationTypes}
              onClick={(key) => setUserCountKey(key)}
            />
            <ResponsiveContainer width={'100%'} height={250}>
              <BarChart data={userCountData}>
                <CartesianGrid vertical={false} />
                <Tooltip formatter={formatUniqueUsersToolTip} />
                <XAxis axisLine={false} tickLine={false} dataKey="date" />
                <YAxis axisLine={false} tickLine={false} width={30} />
                <Bar dataKey="users" fill={COLOURS.BLUE} />
              </BarChart>
            </ResponsiveContainer>
          </ChartContainer>
        </GridCol>
      </GridRow>
      <GridRow margin={{ direction: 'bottom', size: 9 }}>
        <GridCol setWidth="full">
          <ChartContainer>
            <H4>User Languages</H4>
            <ResponsiveContainer width={'100%'} height={250}>
              <BarChart data={userLanguagesData}>
                <CartesianGrid vertical={false} />
                <Tooltip formatter={formatUserLanguagesToolTip} />
                <XAxis axisLine={false} tickLine={false} dataKey="language" />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  width={30}
                  dataKey="percent"
                />
                <Bar dataKey="percent">
                  {userLanguagesData.map((point) => (
                    <Cell key={point.language} fill={point.color} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </ChartContainer>
        </GridCol>
      </GridRow>
      <GridRow margin={{ direction: 'bottom', size: 9 }}>
        <GridCol setWidth="full">
          <ChartContainer>
            <H4>Exporter Journeys</H4>
            <TabbedButtons
              current={exporterJourneyKey}
              keys={durationTypes}
              onClick={(key) => setExporterJourneyKey(key)}
            />
            <ResponsiveContainer width={'100%'} height={250}>
              <Sankey
                nodePadding={50}
                iterations={0}
                data={exporterJourneysData}
                node={{ fill: COLOURS.BLUE }}
                link={{ stroke: COLOURS.TURQUOISE_50, strokeOpacity: 0.5 }}
              >
                <Tooltip />
              </Sankey>
            </ResponsiveContainer>
          </ChartContainer>
        </GridCol>
      </GridRow>
    </Main>
  );
};

export default Admin;
