import React from 'react';
import TableBody from '@components/table/TableBody';
import TableHeader from '@components/table/TableHeader';

const Table = () => {
    const [figures, setFigures] = React.useState<string[]>([]);
    const [data, setData] = React.useState<string[][]>([]);

    return (
        <table>
            <TableHeader headers={figures} />
            <TableBody data={data} />
        </table>
    );
};

export default Table;
