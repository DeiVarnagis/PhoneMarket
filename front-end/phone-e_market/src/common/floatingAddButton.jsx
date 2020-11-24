import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Tooltip from '@material-ui/core/Tooltip';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1)
        }
    },
    extendedIcon: {
        marginRight: theme.spacing(1)
    }
}));

function AddButton(props) {
    const classes = useStyles();
    const { label, onClick } = props;

    return (
        <div className={classes.root}>
            <Tooltip title={label}>
                <Fab color="primary" aria-label={label}>
                    <AddIcon onClick={() => onClick()} />
                </Fab>
            </Tooltip>
        </div>
    );
}

export default AddButton;
