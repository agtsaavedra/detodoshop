import { Card, CardContent, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

export default function ItemDetailContainer(props) {
    const param = useParams();
    const [idCategory, setIdCategory] = useState("");
    const [idItem, setIdItem] = useState("");
    useEffect(() => {
        if (props.products) {
            props.products.forEach((element) => {
                if (element.items === param.item) {
                setIdCategory(element.id);
                }
            });
        }
    }, [param]);

    

        return (
            <div className='detailsContainer'>
                <Card className='cards-descriptions'>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">{props.product.nameProduct}</Typography>
                        <Typography variant="body2" color="h3">
                            ${props.product.nameProduct}
                        </Typography>
                        <Typography variant="body2" color="h5">
                            {props.description}
                        </Typography>
                    </CardContent>
                </Card>
            </div>)
    


}
