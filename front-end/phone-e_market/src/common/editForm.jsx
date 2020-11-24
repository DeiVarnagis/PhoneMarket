import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormTextField from './formTextField';
import PhoneNumber from './phoneNumber';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1
    },
    margin: {
        margin: theme.spacing(1)
    },
    withoutLabel: {
        marginTop: theme.spacing(3)
    },
    textField: {
        width: '25ch'
    }
}));

export default function EditForm(props) {
    const { phone, onChange, errors } = props;
    const {
        model,
        brand,
        screenSize,
        RAMsize,
        state,
        storageSize,
        color,
        phoneNumber,
        price
    } = phone;
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item lg={6} md={12} xs={12}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} lg={4} md={6}>
                            <FormTextField
                                label="Phone's model"
                                name="model"
                                value={model}
                                onChange={onChange}
                                error={errors['model']}
                            />
                        </Grid>
                        <Grid item xs={12} lg={4} md={6}>
                            <FormTextField
                                label="Phone's brand"
                                name="brand"
                                value={brand}
                                onChange={onChange}
                                error={errors['brand']}
                            />
                        </Grid>
                        <Grid item xs={12} lg={4} md={6}>
                            <FormTextField
                                label="Sreen size"
                                unit="Inch"
                                name="screenSize"
                                value={screenSize}
                                onChange={onChange}
                                error={errors['screenSize']}
                            />
                        </Grid>
                    </Grid>
                    <Grid container spacing={2}>
                        <Grid item xs={12} lg={6} md={6}>
                            <FormTextField
                                label="RAM's size"
                                unit="RAM"
                                value={RAMsize}
                                name="RAMsize"
                                onChange={onChange}
                                error={errors['RAMsize']}
                            />
                        </Grid>
                        <Grid item xs={12} lg={6} md={6}>
                            <FormTextField
                                label="Storage size"
                                unit="GB"
                                value={storageSize}
                                name="storageSize"
                                onChange={onChange}
                                error={errors['storageSize']}
                            />
                        </Grid>
                    </Grid>
                    <Grid container spacing={2}>
                        <Grid item xs={12} lg={4} md={6}>
                            <FormTextField
                                label="Color"
                                name="color"
                                value={color}
                                onChange={onChange}
                                error={errors['color']}
                            />
                        </Grid>
                        <Grid item xs={12} lg={4} md={6}>
                            <FormTextField
                                label="Owner's phone number"
                                name="phoneNumber"
                                value={phoneNumber}
                                onChange={onChange}
                                error={errors['color']}
                            />
                        </Grid>
                        <Grid item xs={12} lg={4} md={6}>
                            <FormTextField
                                label="Price"
                                unit="€"
                                value={price}
                                name="price"
                                onChange={onChange}
                                error={errors['price']}
                            />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item lg={6} md={12} xs={12} style={{ padding: '20px' }}>
                    {errors['storageSize'] && (
                        <div className="alert alert-danger">
                            {errors['storageSize']}
                        </div>
                    )}
                    <TextField
                        style={{ height: '100%' }}
                        name="state"
                        onChange={onChange}
                        label="Detail information: "
                        rows="5"
                        value={state}
                        multiline
                        fullWidth={true}
                        variant="filled"
                    />
                </Grid>
            </Grid>
        </div>
    );
}
