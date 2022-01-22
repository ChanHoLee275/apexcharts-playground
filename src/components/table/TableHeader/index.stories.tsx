import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import TableHeader from '.';
import TableHeaderProps from '@interface/table/TableHeaderProps';

export default {
    title: 'components/table/TableHeader',
    component: TableHeader,
    argTypes: {},
} as ComponentMeta<typeof TableHeader>;

const Template: ComponentStory<typeof TableHeader> = (
    args: TableHeaderProps
) => <TableHeader {...args} />;

export const Default = Template.bind({});
Default.args = { headers: ['figure1', 'figure2', 'figure3'] };
