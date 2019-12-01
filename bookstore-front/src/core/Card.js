import React from 'react';
import { Link } from 'react-router-dom';
import ShowImage from './ShowImage';
import moment from 'moment';


const Card = ({ product, showViewProductButton = true, showFullDescription = false }) => {


    const showViewButton = showViewProductButton => {
        return (
            showViewProductButton && (
                <Link to={`/product/${product._id}`} className='mr-2'>
                    <button className="btn btn-dark mt-2 mb-2 mr-2">
                        View Product
                    </button>
                </Link>
            )
        )
    };






    const showAddToCartButton = () => {
        return (
            <button className="btn btn-danger mt-2 mb-2 mr-2" >
                Add to cart
            </button >
        )
    };

    const showDescription = (showFullDescription) => {

        if (showFullDescription) {
            return (<p className='lead mt-2'>{product.description}</p>);
        } else {
            return (<p className='lead mt-2'>{product.description.substring(0, 80)}...</p>);
        }
    };

    const showQuantity = (quantity) => {
        return (
            quantity > 0 ? (<span className='badge badge-primary badge-pill'>In Stock</span>) :
                (<span className='badge badge-primary badge-pill'>Out of stock</span>)
        );
    };


    return (

        <div className="card h-100">
            <div className="card-header name">{product.name}</div>
            <div className="card-body">
                <ShowImage item={product} url='product' />
                {showDescription(showFullDescription)}
                <p className='black-10'>${product.price}</p>
                <p className='black-9'>
                    Category:{product.category && product.category.name}
                </p>
                <p className='black-8'>
                    Added on {moment(product.createdAt).fromNow()}
                </p>
                {showQuantity(product.quantity)}
                <br />
                {showViewButton(showViewProductButton)}
                {showAddToCartButton()}
            </div>
        </div >


    )
}

export default Card;