export const letterCase = (target: string) =>
  ((lower) => lower[0].toUpperCase() + lower.slice(1))(target.toLowerCase());

export const letterCaseToolTip = (value: any, name: string) => [
  value,
  letterCase(name),
];

export const percentToolTip = (value: any, name: string) => [
  `${value}%`,
  letterCase(name),
];

export const minutesToolTip = (value: any, name: string) => [
  `${value} mins`,
  letterCase(name),
];
