import React, { useEffect, useState } from 'react';
import { getTotal } from '../../Utilities/Fakedb';
import Cosmetic from '../Cosmetic/Cosmetic';

const Cosmetics = () => {
    const [cosmetics, setCosmetics] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setCosmetics(data))

    }, [])

    const total = getTotal(cosmetics)

    return (
        <div>
            <h2>wlcome to my cosmetics store</h2>
            <p>Money needed:{total} </p>
            {
                cosmetics.map(cosmetic => <Cosmetic cosmetic={cosmetic} key={cosmetic.id}
                ></Cosmetic>)


            }

        </div>
    );
};

export default Cosmetics;