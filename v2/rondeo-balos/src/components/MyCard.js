import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Link } from '@mui/material';

function MyCard( {title, content, link, image} ) {
    return(
        <Card sx={{ maxWidth: '345' }}>
            <CardActionArea component={Link} href={link} rel='nofollow' target='_blank'>
                <CardMedia
                component='img'
                height='200'
                image={image}
                alt={title}
                sx={{
                    objectPosition: 'top'
                }}
                />
            <CardContent>
                <Typography gutterBottom variant='h6' component='h2'>
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