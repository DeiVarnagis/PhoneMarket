import React, { Fragment } from 'react';
import Joi from 'joi-browser';
import { Redirect } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import Form from '../common/form';
import BackButton from '../common/backButton';
import loginImage from '../images/loginPhoto.jpg';
import auth from '../services/authService';
class Login extends Form {
    // States ----------------------------------------------
    state = {
        data: {
            username: '',
            password: ''
        },
        errors: {}
    };

    // User schema front-end
    schema = {
        username: Joi.string().min(2).max(50).required().label('Username'),
        password: Joi.string().min(5).max(1024).required().label('Password')
    };

    doSubmit = async () => {
        //call server
        try {
            const { username, password } = this.state.data;
            await auth.login(username, password);
            const { state } = this.props.location;
            window.location = state ? state.from.pathname : '/';
        } catch (ex) {
            if (ex.response && ex.response.status === 400) {
                const errors = { ...this.state.errors };
                errors.username = ex.response.data;
                toast.error(ex.response.data);
                console.log(ex);
                this.setState({ errors });
            }
        }
    };
    render() {
        const { smallScreen } = this.props;
        if (auth.getCurrentUser()) return <Redirect to="/" />;
        return (
            <Fragment>
                <div className="row">
                    <div className="col-sm-0 col-md-0 col-lg-6 parentDiv">
                        {smallScreen ? null : (
                            <img src={loginImage} alt="Log in" />
                        )}
                    </div>
                    <div className="col-sm-6 col-md-6 col-lg-6">
                        <ToastContainer />
                        <div className="row action-btn-div">
                            {smallScreen && <BackButton />}
                        </div>
                        <h1>Login</h1>
                        <form onSubmit={this.handleOnSubmit}>
                            {this.renderInput('username', 'Email')}
                            {this.renderInput(
                                'password',
                                'Password',
                                'password'
                            )}
                            {this.renderButton('Login')}
                        </form>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default Login;
