import React from 'react';
import TableHeaderProps from '@interface/table/TableHeaderProps';

const TableHeader = ({ headers }: TableHeaderProps) => {
    return (
        <thead>
            <tr>
                {headers.map((header, i) => (
                    <th key={i}>
                        <input value={header} />
                    </th>
                ))}
            </tr>
        </thead>
    );
};

export default TableHeader;
