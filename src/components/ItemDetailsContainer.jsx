import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ItemDetailsContainer(props) {
    const [idCategory, setIdCategory] = useState("");
    const [idItem, setIdItem] = useState("");
    const [loading, setLoading] = useState (false);
    
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
    console.log(idItem);
    return (
        <div className="contenedor-details">
            {
                props.products.map((element) => {

                    if (element.id === idCategory) {

                        return (
                            element.items.map(items => {

                                if (items.idProduct == idItem) {

                                    return (
                                        <div>
                                            <img src={items.img} className='imgs-card-details' />
                                            <div className="informacion-details">
                                                <p>{items.nameProduct}</p>
                                                <p>{items.description}</p>
                                                <p className="precio-details">{items.price}</p>
                                                <button>Comprar</button>
                                            </div>
                                        </div>
                                    )
                                }
                            })
                        )
                    } else {
                        return null;
                    }
                })
            }
        </div>
    )
}