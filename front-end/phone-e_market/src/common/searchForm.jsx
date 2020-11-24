import React from 'react';

function SearchForm(props) {
    const { type, placeholder, value, onChange } = props;
    return (
        <div className="form-inline d-flex justify-content-center md-form form-sm mt-2">
            <input
                className="form-control form-control-sm ml-3 w-75"
                name="search"
                type={type}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder={placeholder}
            ></input>
        </div>
    );
}

export default SearchForm;
