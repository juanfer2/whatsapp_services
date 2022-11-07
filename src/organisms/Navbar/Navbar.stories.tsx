import React from 'react';
import Navbar from './';
import { Meta, ComponentStory } from '@storybook/react';

export default {
  title: 'Components/Navbar',
  component: Navbar,
} as Meta;

const Story = (args: any) => <Navbar {...args} />;

export const Default: ComponentStory<typeof Navbar> = Story.bind({});

const Props = {};

Default.args = Props;
