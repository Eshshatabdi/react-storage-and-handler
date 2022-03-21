import React from 'react';
import './Cosmetic.css';

const Cosmetic = (props) => {
    const { name, price } = props.cosmetic
    return (
        <div className='product'>
            <h2>Buy this: {name}</h2>
            <p>price: {price} </p>
            <button>add to cart</button>
        </div>
    );
};

export default Cosmetic;