import { ComponentMeta, ComponentStory } from '@storybook/react';
import { AddressForm } from '.';
import { IAddress } from './types';

const defaultHandleSubmit = (address: IAddress) =>
  window.alert(JSON.stringify(address, undefined, 2));

export default {
  title: 'Forms/Address Form',
  component: AddressForm,
} as ComponentMeta<typeof AddressForm>;

const Template: ComponentStory<typeof AddressForm> = (args) => (
  <AddressForm {...args} />
);

export const Default = Template.bind({});
Default.args = {
  handleSubmit: defaultHandleSubmit,
  hints: {
    line1: undefined,
    line2: undefined,
    town: undefined,
    country: undefined,
    postcode: undefined,
  },
};
