import React, { useState, useEffect } from 'react';
import Layout from './Layout';
import { getProducts } from './apiCore';
import Card from './Card';

const Shop = () => {
    return (
        <Layout
            title="Shop Page"
            description="Search and find books"
            className="container-fluid">
            <div className="row">
                <div className="col-4">

                </div>
                <div className="col-8">
                    right sidebar
                </div>
            </div>

        </Layout>
    )
}

export default Shop;