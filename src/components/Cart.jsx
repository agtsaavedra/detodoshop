import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Badge } from '@mui/material';
import React, { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom'

export default function Cart() {
  const [cart, setCart] = useContext(CartContext);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleCartIconClick = () => {
    setIsCartOpen(!isCartOpen);
  }

  const clearCart = () => {
    setCart([]);
  }

  return (
    <>
      <Badge badgeContent={cart.length}>
        <ShoppingCartIcon onClick={handleCartIconClick} />
      </Badge>
      <div className='cart-container'>
        {isCartOpen && // Solo renderizar si el carrito está abierto

          cart.map(function (product) {
            return (

              <div key={product.idProduct} className='cart-product'>
                <div className='info-cart-product'>
                  <span className='cantidad-producto-carrito'>
                    {product.quantity}
                  </span>
                  <p className='titulo-producto-carrito'>
                    {product.nameProduct}
                  </p>
                  <span className='precio-producto-carrito'>
                    ${product.price}
                  </span>
                </div>

              </div>

            )
          }

          )

        }
        
        {isCartOpen && (
          <>
          <Link to="/checkout">
            <button onClick={handleCartIconClick}>Ir al checkout</button>
          </Link>
          <button onClick={() => clearCart()}>Vaciar Carrito</button>
          </>
        )}

      </div>
    </>
  )
}