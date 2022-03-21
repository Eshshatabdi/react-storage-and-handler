import React from 'react';
import { addCart } from '../../Utilities/Fakedb';
import './Cosmetic.css';

const Cosmetic = (props) => {
    const { name, price, id } = props.cosmetic
    const addToCart = (id) => {
        addCart(id)

    }
    return (
        <div className='product'>
            <h2>Buy this: {name}</h2>
            <p>price: {price} </p>
            <p><small>it has id:{id}</small></p>
            <button onClick={() => addToCart(id)}>add to cart</button>
        </div>
    );
};

export default Cosmetic;