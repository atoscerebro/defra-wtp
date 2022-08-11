import {
  ResponsiveContainer,
  BarChart,
  XAxis,
  YAxis,
  Bar,
  CartesianGrid,
  Tooltip,
  Cell,
  Sankey,
  LineChart,
  Line,
  Layer,
  Rectangle,
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
  dailyAverageTime,
  weeklyAverageTime,
  monthlyAverageTime,
} from '../../payloads/charts-data';
import { GridCol, GridRow, H4, Main } from 'govuk-react';
import { letterCaseToolTip, percentToolTip } from './utils';
import * as COLOURS from 'govuk-colours';
import { TabbedButtons } from '../../components/tabbed-buttons';
import { durationTypes, timeTypes } from './constants';
import { useState } from 'react';
import { ChartContainer } from './styled-components';

function LabelNode({
  x,
  y,
  width,
  height,
  index,
  payload,
  containerWidth,
}: any) {
  const isOut = x + width + 6 > containerWidth;
  return (
    <Layer key={`CustomNode${index}`}>
      <Rectangle
        x={x}
        y={y}
        width={width}
        height={height}
        fill={COLOURS.BLUE}
        fillOpacity="1"
      />
      <text
        textAnchor={isOut ? 'end' : 'start'}
        x={isOut ? x - 6 : x + width + 6}
        y={y + height / 2}
        fontSize="14"
        stroke="#333"
      >
        {payload.name}
      </text>
      <text
        textAnchor={isOut ? 'end' : 'start'}
        x={isOut ? x - 6 : x + width + 6}
        y={y + height / 2 + 13}
        fontSize="12"
        stroke="#333"
        strokeOpacity="0.5"
      >
        {payload.value}
      </text>
    </Layer>
  );
}

const Admin: NextPage = () => {
  const [userCountKey, setUserCountKey] = useState(durationTypes[0]);
  const [averageMinutesKey, setAverageMinutesKey] = useState(timeTypes[0]);
  const [exporterJourneyKey, setExporterJourneyKey] = useState(
    durationTypes[0],
  );

  const userCountData = {
    Week: dailyUsersData,
    Month: weeklyUsersData,
    Year: yearlyUsersData,
  }[userCountKey];
  const averageMinutesData = {
    Today: dailyAverageTime,
    Week: weeklyAverageTime,
    Month: monthlyAverageTime,
  }[averageMinutesKey];
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
                <Tooltip formatter={letterCaseToolTip} />
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
            <H4>Average Visit Time</H4>
            <TabbedButtons
              current={averageMinutesKey}
              keys={timeTypes}
              onClick={(key) => setAverageMinutesKey(key)}
            />
            <ResponsiveContainer width={'100%'} height={250}>
              <LineChart data={averageMinutesData}>
                <CartesianGrid vertical={false} />
                <Tooltip
                  formatter={letterCaseToolTip}
                  labelFormatter={(label) => `${label} mins`}
                />
                <XAxis
                  axisLine={false}
                  tickLine={false}
                  dataKey="minutes"
                  tickFormatter={(value) => `${value} mins`}
                />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  width={30}
                  dataKey="users"
                />
                <Line type="monotone" stroke={COLOURS.BLUE} dataKey="users" />
              </LineChart>
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
                <Tooltip formatter={percentToolTip} />
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
                node={<LabelNode width={50} containerWidth={800} />}
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
