export const headers = [
  {
    text: 'Your reference number',
    type: 'none' as const,
    formatType: 'numeric' as const,
  },
  {
    text: 'Collection date',
    sortable: true,
    type: 'none' as const,
    formatType: 'numeric' as const,
  },
  { text: 'Waste code', type: 'none' as const, formatType: 'text' as const },
  { text: 'Link', type: 'none' as const },
  { text: 'Button', type: 'none' as const },
];

export const tableRows = [
  [
    { text: '01546', type: 'data' as const, formatType: 'numeric' as const },
    { text: '5 July 2022', type: 'data' as const, sortValue: '220705' },
    {
      text: 'B1010: Metal and metal-alloy wastes in metallic, non-dispersible form',
      type: 'data' as const,
    },
    { text: 'Link', action: 'link' as const, type: 'action' as const },
    { text: 'Button', action: 'button' as const, type: 'action' as const },
  ],
  [
    { text: '01546', type: 'data' as const },
    { text: '20 July 2022', type: 'data' as const, sortValue: '220720' },
    {
      text: 'GC050: Spent fluid catalytic cracking (FCC) catalysts (e.g. aluminium oxide, zeolites)',
      type: 'data' as const,
    },
    { text: 'Link', action: 'link' as const, type: 'action' as const },
    { text: 'Button', action: 'button' as const, type: 'action' as const },
  ],
  [
    { text: '01546', type: 'data' as const },
    { text: '16 July 2022', type: 'data' as const, sortValue: '220716' },
    {
      text: 'B1010: Metal and metal-alloy wastes in metallic, non-dispersible form',
      type: 'data' as const,
    },
    { text: 'Link', action: 'link' as const, type: 'action' as const },
    { text: 'Button', action: 'button' as const, type: 'action' as const },
  ],
  [
    { text: '01546', type: 'data' as const },
    { text: '22 July 2022', type: 'data' as const, sortValue: '220722' },
    {
      text: 'B1010: Metal and metal-alloy wastes in metallic, non-dispersible form',
      type: 'data' as const,
    },
    { text: 'Link', action: 'link' as const, type: 'action' as const },
    { text: 'Button', action: 'button' as const, type: 'action' as const },
  ],
  [
    { text: '01546', type: 'data' as const },
    { text: '18 July 2022', type: 'data' as const, sortValue: '220718' },
    {
      text: 'B1010: Metal and metal-alloy wastes in metallic, non-dispersible form',
      type: 'data' as const,
    },
    { text: 'Link', action: 'link' as const, type: 'action' as const },
    { text: 'Button', action: 'button' as const, type: 'action' as const },
  ],
];
