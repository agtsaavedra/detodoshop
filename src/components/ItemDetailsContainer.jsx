import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";

export default function ItemDetailsContainer(props) {
    const [idCategory, setIdCategory] = useState("");
    const [idItem, setIdItem] = useState("");
    const [selectedItem, setSelectedItem] = useState();
    
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
    
    let selectedItemTemp;
    
    useEffect(() => {
        if (selectedItemTemp) {
          setSelectedItem(selectedItemTemp);
        }
      }, [selectedItemTemp]);

    return (
        <div className="contenedor-details">
            {   
                props.products.map((element) => {
                    if (element.id === idCategory) {
                        return (
                            element.items.map(items => {
                                if (items.idProduct == idItem) {
                                    selectedItemTemp = (items);
                                    console.log(selectedItemTemp);
                                    return (
                                       <ItemDetail items={items}/>
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