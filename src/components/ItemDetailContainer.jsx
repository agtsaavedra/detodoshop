import { Card, CardContent, Typography } from '@mui/material'
import React from 'react'

export default function ItemDetailContainer(props) {
    return (
        <div className='detailsContainer'>
        <Card>
            <CardContent>
                <Typography variant="body2" color="h5">
                {}
                </Typography>
            </CardContent>
        </Card>
        </div>
    )
}
