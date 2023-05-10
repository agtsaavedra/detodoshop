import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getProductos } from '../data/getData';
import Item from './Item';

export default function ItemsListContainer(props) {
    
    const param = useParams();

    const [products, setProducts] = useState();


    useEffect(() => {

        if (param.category) {
            const getProductsFirestore = getProductos(param.category);

            getProductsFirestore.then((getProductsFirestore => {
                setProducts(getProductsFirestore);
            }))
        }
        else {

            const getProductsFirestoreByCategory = getProductos();

            getProductsFirestoreByCategory.then((getProductsFirestore => {
                setProducts(getProductsFirestore);
            }))
        }

    }, [param]);

    if(!products){
        return (
            <div>Cargando</div>
        )
      }
   

    return (

        <div className="contenedor">
            {
                products && products.map((element) => {
                    return (
                        <>
                            {
                                element.items.map(items => (
                                    <Item items={items} category={element.category}>
                                    </Item>
                                ))
                            }
                        </>
                    )
                })
            }
        </div>

    )
}