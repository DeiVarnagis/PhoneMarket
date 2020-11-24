import React from 'react';

function Line(props) {
    const ColoredLine = ({ color }) => (
        <hr
            style={{
                color: color,
                backgroundColor: color,
                height: 5
            }}
        />
    );
    const { color } = props;
    return <ColoredLine color={color} />;
}

export default Line;
