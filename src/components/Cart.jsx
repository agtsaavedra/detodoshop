import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Badge } from '@mui/material';
import React, { useState } from 'react'

export default function Cart() {
  const [cartVisible, setCartVisible] = useState(false);
  
  return (
    <Badge badgeContent={10}>
    <ShoppingCartIcon>
    </ShoppingCartIcon>
    </Badge>
  )
}
