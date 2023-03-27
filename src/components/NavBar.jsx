import React from 'react'
import Cart from './Cart'
export default function NavBar() {
  return (


    <nav className='navbar'>
      <ul className='title-nav'>
        <li>
          Drinks MDQ
        </li>
        <li>
          <Cart className="icon-nav"/>
        </li>
      </ul>
    </nav>
  )
}
