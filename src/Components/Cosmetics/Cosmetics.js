import React from 'react';
import Cosmetic from '../Cosmetic/Cosmetic';

const Cosmetics = () => {
    const cosmetics = [
        { id: 1, name: 'Alta', price: 100 },
        { id: 2, name: 'Plta', price: 200 },
        { id: 3, name: 'Mlta', price: 300 },
        { id: 4, name: 'balta', price: 400 },
        { id: 5, name: 'nata', price: 500 },

    ]

    return (
        <div>
            <h2>wlcome to my cosmetics store</h2>
            {
                cosmetics.map(cosmetic => <Cosmetic cosmetic={cosmetic} key={cosmetic.id}
                ></Cosmetic>)


            }

        </div>
    );
};

export default Cosmetics;