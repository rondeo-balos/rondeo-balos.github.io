import React from 'react';
import { Typography, Box } from '@mui/material';

function About( {theme} ) {
    return (
        <div>
            <Typography variant='h4' component='h1' className='heading' color='text.primary'>
                <span>About</span>
            </Typography>
            <Box className='content-body'>
                <Typography variant='body2' color='text.primary' style={{ fontSize: '1.5rem', lineHeight: '1.65', fontWeight: 400 }}>
                    I am someone who is willing to try new things. I am interested in any type of working environment, and I believe that my passion will lead to my success, get a job with a well-known company to expand my knowledge in this field. To be a part of a creative organization where I can improve my skills and abilities for the betterment of that organization. Seeking an opportunity to use my knowledge and experience to help people. By the way, check out my awesome work.
                </Typography>
            </Box>
            
        </div>
    );
}

export default About;