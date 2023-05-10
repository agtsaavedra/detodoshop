import React, { useContext, useState } from 'react'
import { CartContext } from '../context/CartContext';


export default function ItemDetail(props) {
    const [cart, setCart] = useContext(CartContext);

    const addToCart = (product) => {
        const existingProduct = cart.find(p => p.idProduct === product.idProduct);
          if (existingProduct) {
            setCart(cart.map(p => p.idProduct === product.idProduct ? { ...p, quantity: p.quantity + 1 } : p));
          } else {
            setCart([...cart, { ...product, quantity: 1 }]);  
          }  
        }

    return (
        
        <div className='container-details-item'>
            <img src={props.items.img} className='imgs-card imgs-card-details' alt='Imagen del Producto'/>
            <div className="informacion-details">
                <p>{props.items.nameProduct}</p>
                <p>{props.items.description}</p>
                <p className="precio-details">${props.items.price}</p>
                <button onClick={() => addToCart(props.items)}>Comprar</button>
            </div>
        </div>
        
    )
}
