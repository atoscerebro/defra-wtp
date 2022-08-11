import { ComponentMeta, ComponentStory } from '@storybook/react';
import { AccessibleAutocomplete } from './accessible-autocomplete';
import '../../styles/autocomplete.css';
import '../../styles/globals.css';

export default {
  title: 'Inputs/Accessible Autocomplete',
  component: AccessibleAutocomplete,
} as ComponentMeta<typeof AccessibleAutocomplete>;

const Template: ComponentStory<typeof AccessibleAutocomplete> = (args) => (
  <AccessibleAutocomplete {...args} />
);

export const Default = Template.bind({});
Default.args = {
  options: [
    'Apple',
    'Banana',
    'Blackberry',
    'Blueberry',
    'Cherry',
    'Grape',
    'Orange',
    'Pineapple',
    'Rhubarb',
    'Strawberry',
  ],
  hintText: 'Start typing and choose an option',
  label: 'Typeahead',
};
