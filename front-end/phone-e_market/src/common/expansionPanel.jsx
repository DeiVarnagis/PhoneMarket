import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%'
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular
    }
}));

function PhoneStateComponent(props) {
    const classes = useStyles();
    const { label, data } = props;

    return (
        <div className={classes.root}>
            <ExpansionPanel>
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    style={{ backgroundColor: '#cccebd' }}
                >
                    <Typography className={classes.heading}>{label}</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <Typography>{data}</Typography>
                </ExpansionPanelDetails>
            </ExpansionPanel>
        </div>
    );
}

export default PhoneStateComponent;
