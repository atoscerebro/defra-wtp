/*
 * Add a average-visit-minutes/user-count line chart
 * Add labels to sankey nodes
 */

// Unique Users

const formatDayDate = (date: Date) => {
  return date.toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
    weekday: 'short',
  });
};

const formatWeekDate = (date: Date) => {
  return date.toLocaleDateString('en-GB', { day: 'numeric', month: 'short' });
};

const formatYearDate = (date: Date) =>
  date.toLocaleDateString('en-GB', { month: 'short' });

export const dailyUsersData = [
  { date: formatDayDate(new Date(2022, 7, 8)), users: 29 },
  { date: formatDayDate(new Date(2022, 7, 9)), users: 25 },
  { date: formatDayDate(new Date(2022, 7, 10)), users: 37 },
  { date: formatDayDate(new Date(2022, 7, 11)), users: 15 },
  { date: formatDayDate(new Date(2022, 7, 12)), users: 20 },
];

export const weeklyUsersData = [
  { date: formatWeekDate(new Date(2022, 7, 1)), users: 104 },
  { date: formatWeekDate(new Date(2022, 7, 8)), users: 145 },
  { date: formatWeekDate(new Date(2022, 7, 15)), users: 98 },
  { date: formatWeekDate(new Date(2022, 7, 22)), users: 175 },
];

export const yearlyUsersData = [
  { date: formatYearDate(new Date(2022, 0, 1)), users: 404 },
  { date: formatYearDate(new Date(2022, 1, 1)), users: 345 },
  { date: formatYearDate(new Date(2022, 2, 1)), users: 198 },
  { date: formatYearDate(new Date(2022, 3, 1)), users: 275 },
  { date: formatYearDate(new Date(2022, 4, 1)), users: 502 },
  { date: formatYearDate(new Date(2022, 5, 1)), users: 298 },
  { date: formatYearDate(new Date(2022, 6, 1)), users: 354 },
  { date: formatYearDate(new Date(2022, 7, 1)), users: 205 },
];

// User visit time

export const dailyAverageTime = [
  { minutes: 1, users: 5 },
  { minutes: 5, users: 8 },
  { minutes: 10, users: 7 },
  { minutes: 15, users: 6 },
  { minutes: 20, users: 9 },
  { minutes: 25, users: 5 },
  { minutes: 30, users: 2 },
];

export const weeklyAverageTime = [
  { minutes: 1, users: 15 },
  { minutes: 5, users: 18 },
  { minutes: 10, users: 34 },
  { minutes: 15, users: 12 },
  { minutes: 20, users: 5 },
  { minutes: 25, users: 2 },
  { minutes: 30, users: 1 },
];

export const monthlyAverageTime = [
  { minutes: 1, users: 56 },
  { minutes: 5, users: 98 },
  { minutes: 10, users: 103 },
  { minutes: 15, users: 130 },
  { minutes: 20, users: 76 },
  { minutes: 25, users: 30 },
  { minutes: 30, users: 15 },
];

// User languages

export const userLanguagesData = [
  { language: 'English', percent: 75, color: 'crimson' },
  { language: 'Ulster Scots', percent: 12, color: 'darkblue' },
  { language: 'Gaelic', percent: 7, color: 'lightblue' },
  { language: 'Welsh', percent: 6, color: 'green' },
];

// Exporter journeys

const exporterJourneyNodes = [
  { name: 'Export started' },
  { name: 'About the waste' },
  { name: 'Exporter and importer' },
  { name: 'Journey of waste' },
  { name: 'Treatment of waste' },
  { name: 'Export submitted' },
  { name: 'Abandonned' },
];

export const dailyExporterJourneysData = {
  nodes: exporterJourneyNodes,
  links: [
    { source: 0, target: 1, value: 82 },
    { source: 1, target: 2, value: 72 },
    { source: 2, target: 3, value: 68 },
    { source: 3, target: 4, value: 65 },
    { source: 4, target: 5, value: 45 },
    { source: 4, target: 6, value: 20 },
    { source: 3, target: 6, value: 3 },
    { source: 2, target: 6, value: 5 },
    { source: 1, target: 6, value: 10 },
    { source: 0, target: 6, value: 30 },
  ],
};

export const weeklyExporterJourneysData = {
  nodes: exporterJourneyNodes,
  links: [
    { source: 0, target: 1, value: 345 },
    { source: 1, target: 2, value: 280 },
    { source: 2, target: 3, value: 275 },
    { source: 3, target: 4, value: 250 },
    { source: 4, target: 5, value: 245 },
    { source: 4, target: 6, value: 5 },
    { source: 3, target: 6, value: 25 },
    { source: 2, target: 6, value: 5 },
    { source: 1, target: 6, value: 65 },
    { source: 0, target: 6, value: 50 },
  ],
};

export const monthlyExporterJourneysData = {
  nodes: exporterJourneyNodes,
  links: [
    { source: 0, target: 1, value: 2025 },
    { source: 1, target: 2, value: 1860 },
    { source: 2, target: 3, value: 1600 },
    { source: 3, target: 4, value: 1515 },
    { source: 4, target: 5, value: 1400 },
    { source: 4, target: 6, value: 115 },
    { source: 3, target: 6, value: 85 },
    { source: 2, target: 6, value: 260 },
    { source: 1, target: 6, value: 165 },
    { source: 0, target: 6, value: 780 },
  ],
};
