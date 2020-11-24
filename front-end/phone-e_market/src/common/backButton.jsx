import React from 'react';
import Button from '@material-ui/core/Button';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';

function BackButton(props) {
    return (
        <Button
            variant="contained"
            color="secondary"
            className="action-btn float-right"
            startIcon={<KeyboardBackspaceIcon />}
        >
            Back
        </Button>
    );
}

export default BackButton;
