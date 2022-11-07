import React from 'react';
import Qr from './';
import { Meta, ComponentStory } from '@storybook/react';

export default {
  title: 'Components/Qr',
  component: Qr
} as Meta;

const Story = (args: any) => <Qr {...args} />;

export const Default: ComponentStory<typeof Qr> = Story.bind({});

const Props = {};

Default.args = Props;
