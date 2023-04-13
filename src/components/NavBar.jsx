import React, { useEffect, useState } from 'react'
import Cart from './Cart'
import { data } from '../data'
import { Link } from 'react-router-dom'
export default function NavBar(props) {
  console.log(props)

  return (

    <nav className='navbar'>
      <ul className='title-nav'>
        <li  className='link-nav' >
        <Link to={"/"}>DeTodo SHOP</Link> 
        </li>
        {props.products.map((element) => {
          return (<Link className='buttons'
          to={"/"+element.category}>{element.category}</Link>);
        })}
        <li>
          <Cart className="icon-nav" />
        </li>
      </ul>
    </nav>
  )
}
