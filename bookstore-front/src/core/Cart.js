import React, { useState, useEffect } from 'react';
import Layout from './Layout';
import { Link } from 'react-router-dom';
import { getCart } from './cartHelper';
import Card from './Card';
import Checkout from './Checkout';


const Cart = () => {
    const [items, setItems] = useState([]);
    const [run, setRun] = useState(false);

    useEffect(() => {
        setItems(getCart());
    }, [run]);


    const showItems = items => {
        return (
            <div>
                <h2>Your cart has {`${items.length}`} items</h2>
                <hr />
                <div className="row">
                    {items.map((product, i) => (

                        <div className="col-lg-6">
                            <Card
                                key={i}
                                product={product}
                                showAddToCartButton={false}
                                cartUpdate={true}
                                showRemoveProductButton={true}
                                setRun={setRun}
                                run={run}
                            />
                        </div>

                    ))}
                </div>
            </div>
        );
    };

    const noItemsMessage = () => (
        <h2>
            Your Cart is empty. <br />
            <Link to="/shop"> Continue shopping. </Link>
        </h2>
    );

    return (
        <Layout title="Shopping Cart" description="Checkout now!" className="container-fluid">
            <div className="row">
                <div className="col-md-6">
                    <h2 className='mb-4'>Your Cart Summary</h2>
                    <hr />
                    <Checkout products={items} />
                </div>
                <div className="col-md-6">
                    {items.length > 0 ? showItems(items) : noItemsMessage()}

                </div>


            </div>
        </Layout>
    );
};

export default Cart;