import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { fetchProducts } from '../data/services/getData';

export default function ItemsListContainer(props) {
    const [idCategory, setIdCategory] = useState("");
    const [productsDefinition, setProductsDefinition] = useState();
    const param = useParams();

    useEffect(() => {
        const fetchData = async () => {
            const productsDataAdapted = await fetchProducts(); 
            setProductsDefinition(productsDataAdapted);
        };

        fetchData();
    }, [param]);

    console.log ("estos son los productos desde el componente:" ,productsDefinition);
    if (!productsDefinition) {
        return <div>Loading...</div>;
    }

    return (
        <div className="contenedor">
            {
                props.products.map((element) => {
                    if (param.category === undefined || element.id === idCategory) {

                        return (
                            <>
                                {element.items.map(items => (

                                    <div>
                                        <img src={items.img} className='imgs-card' />
                                        <div className="informacion">
                                            <p>{items.nameProduct}</p>
                                            <p className="precio">{items.price}<span>.99</span></p>
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