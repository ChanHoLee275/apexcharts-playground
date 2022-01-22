import React from 'react';
import { TableBodyProps } from '@interface/table/TableBodyProps';

const TableBody = ({ data }: TableBodyProps) => {
    return (
        <tbody>
            {data.map((el, idx) => {
                return (
                    <tr key={idx}>
                        {el.map((data, idx2) => (
                            <td key={idx2}>{data}</td>
                        ))}
                    </tr>
                );
            })}
        </tbody>
    );
};

export default TableBody;
