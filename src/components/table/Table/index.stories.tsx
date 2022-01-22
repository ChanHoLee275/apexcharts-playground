import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Table from '.';
import TableProps from '@interface/table/TableProps';

export default {
    title: 'components/table/Table',
    component: Table,
    argTypes: {},
} as ComponentMeta<typeof Table>;

const Template: ComponentStory<typeof Table> = (args: TableProps) => (
    <Table {...args} />
);

export const Default = Template.bind({});
Default.args = {
    header: ['figure1', 'figure2', 'figure3'],
    body: [
        ['1', '2', '3'],
        ['1', '2', '3'],
        ['1', '2', '3'],
    ],
};
