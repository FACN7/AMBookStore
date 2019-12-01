import React, { useState, useEffect } from 'react';
import Layout from './Layout'
import { read } from './apiCore';
import Card from './Card';


const Product = (props) => {


    const [product, setProduct] = useState({});
    const [error, setError] = useState(false);

    const loadSingleProduct = productId => {
        read(productId).then(data => {
            if (data.error) {
                setError(data.error);
            } else {
                setProduct(data);
            }
        })
    };

    useEffect(() => {
        const productId = props.match.params.productId;
        loadSingleProduct(productId)
    }, []);


    return (
        <Layout title={product && product.name}
            description={product.description} className='container-fluid'>
            <div className="col-lg-5 col-md-7 container">
                <div className="row">
                    {
                        product &&
                        product.description &&
                        <Card product={product} showViewProductButton={false} showFullDescription={true} />
                    }
                </div>
            </div>

        </Layout>
    )

}

export default Product;

