import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Badge } from '@mui/material';
import React, { useContext, useState } from 'react'
import { CartContext } from '../context/CartContext';

export default function Cart() {
  const [cartVisible, setCartVisible] = useState(false);
  const [cart, setCart] = useContext(CartContext);
  
  return (
    <Badge badgeContent={cart.length}>
      <ShoppingCartIcon onClick={() => setCartVisible(!cartVisible)} />
    </Badge>
  )
}