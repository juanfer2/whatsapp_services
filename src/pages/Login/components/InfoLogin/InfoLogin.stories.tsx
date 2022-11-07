import React from 'react';
import InfoLogin from './';
import { Meta, ComponentStory } from '@storybook/react';

export default {
  title: 'Components/InfoLogin',
  component: InfoLogin
} as Meta;

const Story = (args: any) => <InfoLogin {...args} />;

export const Default: ComponentStory<typeof InfoLogin> = Story.bind({});

const Props = {};

Default.args = Props;
