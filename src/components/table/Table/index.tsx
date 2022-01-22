import React from 'react';
import TableBody from '../TableBody';
import TableHeader from '../TableHeader';

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
