import React, { useState } from 'react'
import { data } from '../data';
import { Card, Typography, CardMedia, Button, CardActions } from '@mui/material';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import img from '../data'; 
export default function Home(props) {

    return (
        <>
            <h1 className='title-itemlist'>Todos los productos</h1>

            <div className='itemsList'>
                {

                    props.products.map((element) => {
                        return (
                            <>
                                {element.items.map(items => (
                                    <Card className='cards'>
                                        <CardMedia
                                        style = {{ height: 0, paddingTop: '56%'}} 
                                        >
                                            
                                        </CardMedia>
                                        
                                        <Typography gutterBottom variant="h5" component="div">{items.nameProduct}</Typography>
                                        <Typography variant="body2" color="h3">
                                            ${items.price}
                                        </Typography>
                                        <CardActions>
                                            <Button className='button-card' size="big">Comprar</Button>
                                        </CardActions>
                                    </Card>
                                ))}
                            </>)
                    })
                }



            </div>
        </>
    )
}
/**
 * <CardMedia
component="img"
src={require('../public/images/samsung20.jpg')}
/>
 
*/