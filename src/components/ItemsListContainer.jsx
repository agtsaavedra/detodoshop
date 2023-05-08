import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';

export default function ItemsListContainer(props) {
    const [idCategory, setIdCategory] = useState("");
    const param = useParams();
    useEffect(() => {
        if (props.products) {
            props.products.forEach((element) => {
                if (element.category === param.category) {
                    setIdCategory(element.id);
                }
            });
        }


    }, [param]);


    return (
        <div className="contenedor">
            {

                props.products.map((element) => {
                    if (element.id === idCategory || param.category === undefined ) {

                        return (
                            <>

                                {

                                    element.items.map(items => (
                                        
                                        <div>
                                            <img src={items.img} className='imgs-card' alt='Imagen del producto'/>
                                            <div className="informacion">
                                                <p>{items.nameProduct}</p>
                                                <p className="precio">${items.price}</p>
                                                <button>Comprar</button>
                                                <button><Link style={{ textDecoration: 'none', color: 'inherit' }} to={"/" + element.category + "/" + items.idProduct} image={items.img}>Ver Mas</Link></button>
                                            </div>
                                        </div>
                                    ))}
                            </>)
                    }
                })
            }
        </div>
    )
}