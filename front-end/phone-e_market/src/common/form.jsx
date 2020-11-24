import React, { Component } from 'react';
import Joi from 'joi-browser';
import Input from './input';

export default class Form extends Component {
    state = {
        data: {},
        errors: {}
    };
    validate = () => {
        const options = { abortEarly: false };
        const { error } = Joi.validate(this.state.data, this.schema, options);

        if (!error) return null;

        const errors = {};
        for (let item of error.details) errors[item.path[0]] = item.message;
        return errors;
    };
    validateProperty = ({ name, value }) => {
        const obj = { [name]: value };
        const subSchema = { [name]: this.schema[name] };

        const { error } = Joi.validate(obj, subSchema);
        return error ? error.details[0].message : null;
    };
    handleOnSubmit = (e) => {
        e.preventDefault();

        const errors = this.validate();
        this.setState({ errors: errors || {} });
        if (errors) return;

        this.doSubmit();
    };
    handleChange = (e) => {
        // validate each input
        const { value, name } = e.currentTarget;
        const { currentTarget: input } = e;

        const currentErrors = { ...this.state.errors };
        const errorMessage = this.validateProperty(input);
        if (errorMessage) currentErrors[name] = errorMessage;
        else delete currentErrors[name];

        const newdata = { ...this.state.data };
        newdata[name] = value;

        this.setState({ data: newdata, errors: currentErrors });
    };
    renderInput(name, label, type = 'text') {
        const { data, errors } = this.state;
        return (
            <Input
                name={name}
                error={errors[name]}
                value={data[name]}
                label={label}
                type={type}
                onChange={this.handleChange}
            />
        );
    }
    renderButton(label) {
        return (
            <button disabled={this.validate()} className="btn btn-primary">
                {label}
            </button>
        );
    }
}
