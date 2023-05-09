import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext'

export default function Item(props) {
    
    const [cart, setCart] = useContext(CartContext);

    const addToCart = (product) => {
        
        const existingProduct = cart.find(p => p.idProduct === product.idProduct);
        if (existingProduct) {
          setCart(cart.map(p => p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p));
          console.log(cart)
        } else {
          setCart([...cart, { ...product, quantity: 1 }]);
          console.log(cart)
        }
      }

    
    return (
        <>
        
            <div>
                <img src={props.items.img} className='imgs-card' alt='Imagen del producto' />
                <div className="informacion">
                    <p>{props.items.nameProduct}</p>
                    <p className="precio">${props.items.price}</p>
                    <button onClick={() => addToCart(props.items)}>Comprar</button>
                    <button><Link style={{ textDecoration: 'none', color: 'inherit' }} to={"/" + props.category + "/" + props.items.idProduct} image={props.items.img}>Ver Mas</Link></button>
                </div>
            </div>
            
        </>
    )
}
