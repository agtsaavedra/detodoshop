import { Card, CardContent, Typography } from '@mui/material'
import React from 'react'

export default function ItemDetailContainer(props) {

    if (props.visible) {
        return (
            <div className='detailsContainer'>
                <Card>
                    <CardContent>
                        <Typography variant="body2" color="h5">
                            {props.description}
                        </Typography>
                    </CardContent>
                </Card>
            </div>)
    }


}
