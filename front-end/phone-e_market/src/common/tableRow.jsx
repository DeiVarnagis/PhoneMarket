import React from 'react';
import { TableRow, TableCell } from '@material-ui/core';

function PhoneRow(props) {
    const { label, value, secondLabel = ' ' } = props;
    return (
        <TableRow>
            <TableCell>{label}</TableCell>
            <TableCell>
                {value} {secondLabel}
            </TableCell>
        </TableRow>
    );
}

export default PhoneRow;
