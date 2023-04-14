import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

export default function ItemDetailsContainer(props) {
    const [idCategory, setIdCategory] = useState("");
    const [idItem, setIdItem] = useState("");
    const param = useParams();
    useEffect(() => {
        if (props.products) {
            props.products.forEach((element) => {
                if (element.category === param.item) {
                    setIdCategory(element.id);
                }
            });
        }
        
        setIdItem(param.id)
    }, [param]);

    return (
        <div className="contenedor-details">
            {

                props.products.map((element) => {
                  
                    if (element.id === idCategory) {
                        return (
                            element.items.map(items => (
                                
                                        <div>
                                            <img src={items.img} className='imgs-card' />
                                            <div className="informacion">
                                                <p>{items.nameProduct}</p>
                                                <p className="precio">{items.price}<span>.99</span></p>
                                                <button>Comprar</button>
                                            </div>
                                        </div>
                                    ))
                            )
                    }
                })
            }
        </div>
    )


}