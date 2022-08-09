import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from 'govuk-react';
import { Form } from 'react-final-form';
import { ContactForm } from '.';

const defaultHandleSubmit = (values: any) =>
  window.alert(JSON.stringify(values, undefined, 2));

export default {
  title: 'Forms/Contact Form',
  component: ContactForm,
} as ComponentMeta<typeof ContactForm>;

const Template: ComponentStory<typeof ContactForm> = (args, context) => (
  <Form onSubmit={defaultHandleSubmit}>
    {({ handleSubmit }) => (
      <form onSubmit={handleSubmit}>
        <ContactForm {...args} />
        {context.viewMode === 'story' && <Button>Save and continue</Button>}
      </form>
    )}
  </Form>
);

export const Default = Template.bind({});
Default.args = {
  hints: {
    fullName: undefined,
    email: undefined,
    phone: undefined,
    fax: undefined,
  },
};
