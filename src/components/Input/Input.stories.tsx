import React from 'react';
import Input from './';
import { Meta, ComponentStory } from '@storybook/react';

export default {
  title: 'Components/Input',
  component: Input
} as Meta;

const Story = (args: any) => <Input {...args} />;

export const Default: ComponentStory<typeof Input> = Story.bind({});

const Props = {};

Default.args = Props;
