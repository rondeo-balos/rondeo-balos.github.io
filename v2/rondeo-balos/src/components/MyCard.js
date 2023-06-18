import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

function MyCard( {title, content, link, image} ) {
    return(
        <Card sx={{ maxWidth: '345' }}>
            <CardActionArea>
                <CardMedia
                component='img's
                height='140'
                image={image}
                alt={title}
                />
            <CardContent>
                <Typography gutterBottom variant='h5' component='div'>
                    {title}
                </Typography>
                <Typography variant='body2' color='text.secondary'>
                    {content}
                </Typography>
            </CardContent>
            </CardActionArea>
        </Card>
    );
}

export default MyCard;