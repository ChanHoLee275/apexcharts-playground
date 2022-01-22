import React from 'react';
import TableHeaderProps from '@interface/table/TableHeaderProps';

const TableHeader = ({ headers }: TableHeaderProps) => {
    return (
        <th>
            {headers.map((header, i) => (
                <tr key={i}>
                    <input value={header} />
                </tr>
            ))}
        </th>
    );
};

export default TableHeader;
