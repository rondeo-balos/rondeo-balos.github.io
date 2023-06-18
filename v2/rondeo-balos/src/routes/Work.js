import React, { useState, useEffect } from 'react';
import { Typography, Box, Grid, Skeleton } from '@mui/material';
import MyCard from '../components/MyCard';

import background from '../assets/background.webp';

function Work( {theme} ) {
    const [isLoading, setIsLoading] = useState(true); // Initial loading state
    // Simulating data loading
    useEffect(() => {
        // Simulate an asynchronous request
        const fetchData = async () => {
        // Add a delay to simulate data loading
        await new Promise(resolve => setTimeout(resolve, 2000));

        // After the delay, set isLoading to false to indicate that data has finished loading
        setIsLoading(false);
        };

        fetchData();
    }, []); // Empty dependency array to run the effect only once

    return (
        <div>
            <Typography variant='h4' className='heading' color='text.primary'>
                <span>Projects</span>
            </Typography>
            <Box className='content-body'>
                { isLoading ? (
                    <Grid container spacing={2} justifyContent="start">
                        {/* Skeleton loading effect */}
                        <Grid item xs={12} md={6}>
                            <Skeleton variant="rectangular" width="100%" height={200} animation="wave" />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Skeleton variant="rectangular" width="100%" height={200} animation="wave" />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Skeleton variant="rectangular" width="100%" height={200} animation="wave" />
                        </Grid>
                    </Grid>
                ) : (
                    <Grid container spacing={2} justifyContent='start'>
                        <Grid item xs={12} md={6}>
                            <MyCard title='Sample' content='Lorem ipsum dolor sit amet' link='https://rondeobalos.com' image={background} />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <MyCard title='Sample' content='Lorem ipsum dolor sit amet' link='https://rondeobalos.com' image={background} />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <MyCard title='Sample' content='Lorem ipsum dolor sit amet' link='https://rondeobalos.com' image={background} />
                        </Grid>
                    </Grid>
                ) }
            </Box>
            
        </div>
    );
}

export default Work;