import React, { useEffect, useState } from 'react'
import Cart from './Cart'
import {data} from '../data'
export default function NavBar(props) {
  console.log(props)

  return (
  
    <nav className='navbar'>
      <ul className='title-nav'>
        <li>
          Drinks MDQ
        </li>
        {props.products.map((element) => {
          return (<button className='buttons'>{element.name}</button>);
        })}
        <li>
          <Cart className="icon-nav"/>
        </li>
      </ul>
    </nav>
  )
}
