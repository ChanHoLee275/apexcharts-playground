import React from 'react';
import TableBody from '@components/table/TableBody';
import TableHeader from '@components/table/TableHeader';
import TableProps from '@interface/table/TableProps';

const Table = ({ header, body }: TableProps) => {
    const [figures, setFigures] = React.useState<string[]>(header ?? []);
    const [data, setData] = React.useState<string[][]>(body ?? [[]]);

    return (
        <table>
            <TableHeader headers={figures} />
            <TableBody data={data} />
        </table>
    );
};

export default Table;
