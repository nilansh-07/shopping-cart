import React, { useEffect, useState } from 'react';
import './Shop.css';
import Card from './Card';
function Shop(props) {

    const [products, setProducts] = useState([]);
    const [basket, addToBasket] = useState([]);
    async function getData()
    {
        const dummy = await fetch('https://dummyjson.com/products');
        const json_data = await dummy.json();
        console.log(json_data.products);
        setProducts(json_data.products);
    }

    useEffect(function(){
        getData();
    },[])

    function HandlerAddToBasket(prod)
    {
            addToBasket([...basket, prod]);
    }
    function HandlerRemoveFromCart(id)
    {
        const newBasket = basket.filter(cart=> cart.id !==id);
        addToBasket(newBasket);
    }

    const total = basket.reduce((acc,item)=> acc+item.price ,0 );

    return (
        <div className='container'>
           <div className='row'>
                <div className='col-8'>
                    <div className='pd'>
                        <div className='row'>
                           {
                            products.map(prod=>(
                                <Card product={prod} HandlerAddToBasket={HandlerAddToBasket}/>
                            ))
                           }
                        </div>
                    </div>
                </div>
                <div className='col-3'>
                   <div className='stickey'>
                    <h1 className='basketlen'>Cart - {basket.length}</h1>
                    {
                        basket.map(cart=>(
                            <div className='cart'>
                                <img src={cart.thumbnail}/>
                                <h4>{cart.title}</h4>
                                <h1>Rs.{cart.price}</h1>
                                <button onClick={()=>HandlerRemoveFromCart(cart.id)}>x</button>
                            </div>
                        ))
                    }
                    <h1 className='basketlen'>Cart Amount - Rs. {total}</h1>
                   </div>
                </div>
           </div>
        </div>
    );
}

export default Shop;