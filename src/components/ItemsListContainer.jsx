import React, { useState } from 'react'
import { data } from '../data';
import { Card, Typography, CardMedia, Button, CardActions, Icon } from '@mui/material';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetailContainer from './ItemDetailContainer';
export default function ItemsListContainer(props) {
    const [cardDescription, setCardDescription] = useState(false);
    const [itemDetails, setItemDetails] = useState(false);
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
    console.log(idCategory)
    return (
        <>
            <h1 className='title-itemlist'>Productos</h1>
            <div className='itemsList'>

                {

                    props.products.map((element) => {
                        if (element.id === idCategory) {
                            return (
                                <>
                                    {element.items.map(items => (
                                        <Card className='cards'>
                                            <CardMedia
                                                image={items.img}
                                            />
                                            <Typography gutterBottom variant="h5" component="div">{items.nameProduct}</Typography>
                                            <Typography variant="body2" color="h3">
                                                ${items.price}
                                            </Typography>
                                            
                                            <ItemDetailContainer description={items.description}></ItemDetailContainer>
                                                
                                           
                                            <CardActions>
                                                <Button className='button-card' size="big">Comprar</Button>
                                                <Button className='button-card' size="small">Ver mas</Button>
                                            </CardActions>
                                        </Card>
                                    ))}
                                </>)
                        }
                    })
                }



            </div>
        </>
    )
}
