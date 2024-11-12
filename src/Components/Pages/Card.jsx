import React from 'react';

function Card({product, HandlerAddToBasket}) {
    return (
        <div className='card'>
            <img src={product.thumbnail}/>
            <div className='card-body'>
                <h3>{product.title}</h3>
                <p>Rating {product.rating}</p>
                <h2>Rs.{product.price}</h2>
                <button onClick={()=>HandlerAddToBasket(product)}>Add to Basket</button>
            </div>
        </div>
    );
}

export default Card;