import React from 'react';
import Grid from '@material-ui/core/Grid';
import Line from './line';

function Title(props) {
    return (
        <div style={{ paddingTop: '1%' }}>
            <Line color="#ffcd38" />
            <Grid container spacing={5}>
                <Grid item xs={12} style={{ textAlign: 'center' }}>
                    <h1 className="phones_title">Phones</h1>
                </Grid>
            </Grid>
            <Line color="#ffcd38" />
        </div>
    );
}

export default Title;
