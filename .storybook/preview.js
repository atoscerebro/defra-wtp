import { GridCol } from 'govuk-react';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story, context) => {
    return context.viewMode === 'story' ? (
      <GridCol setWidth="two-thirds">
        <Story />
      </GridCol>
    ) : (
      <Story />
    );
  },
];
