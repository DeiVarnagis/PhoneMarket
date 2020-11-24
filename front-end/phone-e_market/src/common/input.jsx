import React from 'react';

function Input(props) {
    const { name, label, error, ...rest } = props;
    return (
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            <input
                {...rest}
                id={name}
                name={name}
                className="form-control"
            ></input>
            {error && <div className="alert alert-danger">{error}</div>}
        </div>
    );
}

export default Input;