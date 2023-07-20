import React from 'react';
import './ProductCard.css';

const ProductCard = ({ product }) => {
    const { name, price, imageUrl, description } = product;

    return (
        <div className="product-card">
            <div className="product-image">
                <img src={imageUrl} alt={name} />
            </div>
            <div className="product-details">
                <h3 className="product-name">{name}</h3>
                <p className="product-price">${price.toFixed(2)}</p>
                <p className="product-description">{description}</p>
                <button className="product-button">Add to Cart</button>
            </div>
        </div>
    );
};

export default ProductCard;
