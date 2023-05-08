import React from 'react'
import { Link } from 'react-router-dom'
export default function Item(props) {
    
    return (
        <>
            <div>
                <img src={props.items.img} className='imgs-card' alt='Imagen del producto' />
                <div className="informacion">
                    <p>{props.items.nameProduct}</p>
                    <p className="precio">${props.items.price}</p>
                    <button>Comprar</button>
                    <button><Link style={{ textDecoration: 'none', color: 'inherit' }} to={"/" + props.category + "/" + props.items.idProduct} image={props.items.img}>Ver Mas</Link></button>
                </div>
            </div>
        </>
    )
}
