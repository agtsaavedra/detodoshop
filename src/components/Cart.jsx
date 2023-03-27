import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Badge } from '@mui/material';
export default function Cart() {
  return (
    <Badge badgeContent={4} color="primary">
    <ShoppingCartIcon>Cart</ShoppingCartIcon>
    </Badge>
  )
}
