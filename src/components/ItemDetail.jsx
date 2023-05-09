import React, { useState } from 'react'


export default function ItemDetail(props) {
    

    return (
        
        <div>
            <img src={props.items.img} className='imgs-card imgs-card-details' alt='Imagen del Producto'/>
            <div className="informacion-details">
                <p>{props.items.nameProduct}</p>
                <p>{props.items.description}</p>
                <p className="precio-details">${props.items.price}</p>
                <button>Comprar</button>
            </div>
        </div>
        
    )
}
