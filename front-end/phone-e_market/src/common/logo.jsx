import React from 'react';

function Logo(props) {
    const { firstPart, logo, secondPart } = props;
    return (
        <span className="nav-item nav-link logo">
            {firstPart} <span id="logoSpan">{logo}</span>
            {secondPart}
        </span>
    );
}

export default Logo;
