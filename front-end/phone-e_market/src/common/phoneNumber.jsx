import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import PhoneIcon from '@material-ui/icons/Phone';

function PhoneNumber(props) {
    const { label, value } = props;
    return (
        <FormControl>
            <InputLabel htmlFor="input-with-icon-adornment">{label}</InputLabel>
            <Input
                id="input-with-icon-adornment"
                value={value}
                startAdornment={
                    <InputAdornment position="start">
                        <PhoneIcon />
                    </InputAdornment>
                }
            />
        </FormControl>
    );
}

export default PhoneNumber;
