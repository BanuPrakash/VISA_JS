import React from 'react';
import "../styles.css"
export default function Product({name, price}) {
    return <div className='card'>
        <div>
            <h1>{name}</h1>
            <h2>{price}</h2>
        </div>
    </div>
}
// XML