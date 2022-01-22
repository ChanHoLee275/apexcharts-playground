import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import TableBody from '.';
import { TableBodyProps } from '@interface/table/TableBodyProps';

export default {
    title: 'components/table/TableBody',
    component: TableBody,
    argTypes: {},
} as ComponentMeta<typeof TableBody>;

const Template: ComponentStory<typeof TableBody> = (args: TableBodyProps) => (
    <TableBody {...args} />
);

export const Default = Template.bind({});
Default.args = {
    data: [
        ['1', '2', '3', '4'],
        ['1', '2', '3', '4'],
        ['1', '2', '3', '4'],
    ],
};
