import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Signup from './user/Signup';
import Signin from './user/Signin';
import Home from './core/Home';
import PrivateRoute from './auth/PrivateRoute';
import AdminRoute from './auth/AdminRoute';
import Dashboard from './user/UserDashboard';
import AdminDashboard from './user/AdminDashboard';
import AddCategory from './admin/AddCategory';
import AddProduct from './admin/AddProduct';
import Shop from './core/Shop';
import Product from './core/Product';
import Profile from './user/Profile';
import Cart from './core/Cart'
import Orders from './admin/Orders';
import ManageProducts from './admin/ManageProducts';
import UpdateProduct from './admin/UpdateProduct';



const Routes = () => {
    return (
        <BrowserRouter>

            <Switch>

                <Route exact path="/" component={Home} />
                <Route exact path="/cart" component={Cart} />
                <Route exact path="/shop" component={Shop} />
                <Route exact path="/signin" component={Signin} />
                <Route exact path="/signup" component={Signup} />
                <PrivateRoute path="/user/dashboard" exact component={Dashboard} />
                <AdminRoute path="/admin/dashboard" exact component={AdminDashboard} />
                <AdminRoute path="/create/category" exact component={AddCategory} />
                <AdminRoute path="/create/product" exact component={AddProduct} />
                <AdminRoute path="/admin/product/update/:productId" exact component={UpdateProduct} />
                <AdminRoute path="/admin/orders" exact component={Orders} />
                <AdminRoute path="/admin/products" exact component={ManageProducts} />
                <Route exact path="/product/:productId" component={Product} />

                <PrivateRoute path="/profile/:userId" exact component={Profile} />
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;

