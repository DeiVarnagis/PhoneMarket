import React, { useState } from 'react';
import EditIcon from '@material-ui/icons/Edit';
function EditICON(props) {
    const { onClick } = props;
    const [mouseOverEdit, setMouseOverEdit] = useState(false);
    function handleMouseOverEdit() {
        setMouseOverEdit(true);
    }
    function handleMouseOutEdit() {
        setMouseOverEdit(false);
    }
    return (
        <EditIcon
            style={
                mouseOverEdit
                    ? {
                          fontSize: 50,
                          cursor: 'pointer',
                          color: '#ffcd38'
                      }
                    : { cursor: 'pointer', fontSize: 40 }
            }
            onMouseOver={handleMouseOverEdit}
            onMouseOut={handleMouseOutEdit}
            onClick={() => onClick()}
        />
    );
}

export default EditICON;
