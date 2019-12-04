import React, { Fragment } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { signout, isAuthenticated } from '../auth/index';
import { itemTotal, emptyCart } from './cartHelper';

const isActive = (history, path) => {
    if (history.location.pathname === path) {
        return { color: 'grey' };
    } else {
        return { color: '#fff' }
    }
}

const Menu = ({ history }) => (
    <div>
        <ul className="nav nav-tabs bg-dark">
            <li className="nav-item">
                <Link className="nav-link" style={isActive(history, "/")} to="/">Home</Link>
            </li>

            <li className="nav-item">
                <Link className="nav-link" style={isActive(history, "/shop")} to="/shop">Shop</Link>
            </li>

            <li className="nav-item">
                <Link
                    className="nav-link"
                    style={isActive(history, "/cart")}
                    to="/cart">Cart <sup><small className="cart-badge">{itemTotal()}</small></sup>
                </Link>
            </li>

            {isAuthenticated() && isAuthenticated().user.role === 0 && (
                <li className="nav-item">
                    <Link className="nav-link" style={isActive(history, "/user/dashboard")} to="/user/dashboard">Dashboard</Link>
                </li>
            )}

            {isAuthenticated() && isAuthenticated().user.role === 1 && (
                <li className="nav-item">
                    <Link className="nav-link" style={isActive(history, "/admin/dashboard")} to="/admin/dashboard">Dashboard</Link>
                </li>
            )}

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
                            emptyCart();
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