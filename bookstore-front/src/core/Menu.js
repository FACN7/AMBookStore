import React, { Fragment } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { signout, isAuthenticated } from '../auth/index';

const isActive = (history, path) => {
    if (history.location.pathname === path) {
        return { color: 'black' };
    } else {
        return { color: '#fff' }
    }
}

const Menu = ({ history }) => (
    <div>
        <ul className="nav nav-tabs bg-danger">
            <li className="nav-item">
                <Link className="nav-link" style={isActive(history, "/")} to="/">Home</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" style={isActive(history, "/user/dashboard")} to="/user/dashboard">Dashboard</Link>
            </li>
            {
                !isAuthenticated() && (<Fragment>
                    <li className="nav-item">
                        <Link className="nav-link" style={isActive(history, "/signin")} to="/signin">Signin</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" style={isActive(history, "/signup")} to="/signup">Signup</Link>
                    </li>
                </Fragment>)
            }

            {isAuthenticated() && (
                <li className="nav-item">
                    <span className="nav-link"
                        style={{ cursor: 'pointer', color: '#fff' }}
                        onClick={() => signout(() => {
                            history.push('/');
                        })}>
                        Signout
                    </span>
                </li>
            )}
        </ul>
    </div>
)

export default withRouter(Menu);