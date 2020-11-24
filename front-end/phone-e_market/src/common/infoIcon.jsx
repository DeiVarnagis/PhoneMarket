import React, { useState } from 'react';
import InfoIcon from '@material-ui/icons/Info';

function InfoICON(props) {
    const [mouseOverInfo, setMouseOverInfo] = useState(false);
    const { onClick } = props;
    function handleMouseOverInfo() {
        setMouseOverInfo(true);
    }
    function handleMouseOutInfo() {
        setMouseOverInfo(false);
    }
    return (
        <InfoIcon
            style={
                mouseOverInfo
                    ? {
                          fontSize: 50,
                          cursor: 'pointer',
                          color: '#248B8B'
                      }
                    : { cursor: 'pointer', fontSize: 40 }
            }
            onMouseOver={handleMouseOverInfo}
            onMouseOut={handleMouseOutInfo}
            onClick={() => onClick()}
        />
    );
}

export default InfoICON;
