export const letterCase = (target: string) =>
  ((lower) => lower[0].toUpperCase() + lower.slice(1))(target.toLowerCase());

export const formatToolTip = (value: any, name: string) => [
  value,
  letterCase(name),
];
