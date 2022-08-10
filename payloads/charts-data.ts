/*
 * Users today
 * Language choices
 * Sections completed/Started completion
 */

const formatChartDate = (date: Date) => {
  return date.toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
    weekday: 'short',
  });
};

export const dailyUsersData = [
  { date: formatChartDate(new Date(2022, 7, 8)), users: 29 },
  { date: formatChartDate(new Date(2022, 7, 9)), users: 25 },
  { date: formatChartDate(new Date(2022, 7, 10)), users: 37 },
  { date: formatChartDate(new Date(2022, 7, 11)), users: 15 },
  { date: formatChartDate(new Date(2022, 7, 12)), users: 20 },
];
