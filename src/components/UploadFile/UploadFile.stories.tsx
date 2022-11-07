import { ComponentStory, Meta } from '@storybook/react';
import React from 'react';
import UploadFile from './';

export default {
  title: 'Components/UploadFile',
  component: UploadFile
} as Meta;

const Story = (args: any) => <UploadFile {...args} />;

export const Default: ComponentStory<typeof UploadFile> = Story.bind({});

const Props = {};

Default.args = Props;
