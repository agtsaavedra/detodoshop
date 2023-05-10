import React from 'react'

export default function CheckoutDetail(props) {
  return (
    <div key={props.product.idProduct} className='detail-item' >
    <div>
      <span className='cantidad-producto-carrito'>{props.product.quantity}</span>
      <p className='titulo-producto-carrito'>{props.product.nameProduct}</p>
      <span className='precio-producto-carrito'>${props.product.price}</span>
    </div>
  </div>
  )
}
