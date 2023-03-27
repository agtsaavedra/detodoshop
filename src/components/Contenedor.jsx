import React from 'react'
import ItemsListContainer from './ItemsListContainer'
import NavBar from './NavBar'
export default function Contenedor() {
  return (
    <div>
        <NavBar/>  
        <ItemsListContainer greeting="Listado"/>    
    </div>
  )
}
