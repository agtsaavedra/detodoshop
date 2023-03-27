import React from 'react'

export default function ItemsListContainer(props) {
  return (
    <div className='itemsList'>
       <div className='title'>{props.greeting}</div> 
        <ul>
            <li>
                Cerveza
            </li>
            <li>
                Coca Cola
            </li>
            <li>
                Vodka
            </li>
        </ul>
    </div>
  )
}
