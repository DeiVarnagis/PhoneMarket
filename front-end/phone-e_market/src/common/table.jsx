import React from 'react';
import {
    TableRow,
    TableBody,
    TableContainer,
    TableHead,
    Table,
    Paper,
    TableCell
} from '@material-ui/core';
import PhoneRow from './tableRow';

function PhoneTable(props) {
    const { phone } = props;
    const {
        model,
        brand,
        screenSize,
        RAMsize,
        storageSize,
        color,
        price
    } = phone;
    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow style={{ backgroundColor: '#ffcd38' }}>
                        <TableCell>
                            <h2>Phone Properties: </h2>
                        </TableCell>
                        <TableCell></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <PhoneRow label="Model 📱" value={model} />
                    <PhoneRow label="Brand 💎" value={brand} />
                    <PhoneRow
                        label="Screen size ⚙"
                        value={screenSize}
                        secondLabel="inches"
                    />
                    <PhoneRow
                        label="RAMS ⚙"
                        value={RAMsize}
                        secondLabel=" GB of RAM"
                    />
                    <PhoneRow
                        label="Storage size ⚙"
                        value={storageSize}
                        secondLabel=" GBs"
                    />
                    <PhoneRow label="Phone's color 🌈" value={color} />
                    <PhoneRow
                        label="Phone's price 💰"
                        value={price}
                        secondLabel=" eur."
                    />
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default PhoneTable;
