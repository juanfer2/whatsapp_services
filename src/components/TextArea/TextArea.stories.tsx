import React from 'react';
import TextArea from './';
import { Meta, ComponentStory } from '@storybook/react';

export default {
  title: 'Components/TextArea',
  component: TextArea,
} as Meta;

const Story = (args: any) => <TextArea {...args} />;

export const Default: ComponentStory<typeof TextArea> = Story.bind({});

const Props = {};

Default.args = Props;
