import React from 'react';
import SaveIcon from '@material-ui/icons/Save';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

function SaveButton(props) {
    const { onClick } = props;
    return (
        <Grid container spacing={3}>
            <Grid item lg={2} md={3} xs={4} style={{ padding: '20px' }}>
                <Button
                    variant="contained"
                    color="inherit"
                    size="large"
                    startIcon={<SaveIcon />}
                    onClick={() => onClick()}
                >
                    Save
                </Button>
            </Grid>
        </Grid>
    );
}

export default SaveButton;
