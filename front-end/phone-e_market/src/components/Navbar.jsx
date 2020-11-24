import React, { Fragment } from 'react';
import NavbarLink from './../common/navLinks';
import Logo from './../common/logo';
import UserIcon from '../common/userIcon';

function Navbar(props) {
    const { user } = props;
    return (
        <nav className="navbar navbar-icon-top navbar-expand-lg navbar-dark bg-dark">
            <div className="collapse navbar-collapse">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="/">
                            <Logo
                                firstPart="Phones"
                                logo="e-"
                                secondPart="Market"
                            />
                        </a>
                    </li>
                </ul>
                <ul className="navbar-nav">
                    <NavbarLink label="Phones" to="/phones" />
                </ul>
                {!user && (
                    <Fragment>
                        <ul className="navbar-nav">
                            <NavbarLink label="Login" to="/login" />
                        </ul>
                        <ul className="navbar-nav">
                            <NavbarLink label="Register" to="/register" />
                        </ul>
                    </Fragment>
                )}
            </div>
            {user && (
                <Fragment>
                    <ul className="navbar-nav">
                        <NavbarLink label="Logout" to="/logout" />
                    </ul>
                    <div className="form-inline my-2 my-lg-0 navUserIcon">
                        <ul className="navbar-nav">
                            <UserIcon user={user.name} />
                        </ul>
                    </div>
                </Fragment>
            )}
        </nav>
    );
}

export default Navbar;
