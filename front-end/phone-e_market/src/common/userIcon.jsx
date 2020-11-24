import React from 'react';

function UserIcon(props) {
    const { user } = props;
    return (
        <div className="widget-header icontext row">
            <div className="col userIcon">
                <span className="icon icon-sm rounded-circle border">
                    <i className="fa fa-user fa-2x secondaryColor"></i>
                </span>
            </div>
            <div className="text">
                <span className="greetings secondaryColor">Welcome!</span>
                <div className="userName">{user}</div>
            </div>
        </div>
    );
}

export default UserIcon;
