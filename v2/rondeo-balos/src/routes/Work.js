import React, { useState, useEffect } from 'react';
import { Typography, Box, Grid, Skeleton } from '@mui/material';
import MyCard from '../components/MyCard';

import andjoy from '../assets/work/andjoybandb.com.webp';
import elnard from '../assets/work/elnardintegratedfarm.com.webp';
import khora from '../assets/work/mykhora.com.webp';
import siquijor from '../assets/work/siquijorprovince.com.webp';

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
            <Typography variant='h4' component='h1' className='heading' color='text.primary'>
                <span>Projects</span>
            </Typography>
            <Box className='content-body'>
                { isLoading ? (
                    <Grid container spacing={5} justifyContent="start">
                        {/* Skeleton loading effect */}
                        <Grid item xs={12} md={6}>
                            <Skeleton variant="rectangular" width="100%" height={300} animation="wave" />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Skeleton variant="rectangular" width="100%" height={300} animation="wave" />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Skeleton variant="rectangular" width="100%" height={300} animation="wave" />
                        </Grid>
                    </Grid>
                ) : (
                    <Grid container spacing={5} justifyContent='start'>
                        <Grid item xs={12} md={6}>
                            <MyCard title='ANDJOY BED AND BREAKFAST' content='Fair prices on bed and breakfasts in Bunlan, Santander, Cebu. From breakfast, free Wifi, AC and choose an ideal place for your stay.' link='https://andjoybandb.com' image={andjoy} />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <MyCard title='ELNARD INTEGRATED FARM' content='Elnard Integrated Farm adopts a farm activities and training, experience beauty of nature and explore the unbeaten path of the farm.' link='https://elnardintegratedfarm.com' image={elnard} />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <MyCard title='SIQUIJOR PROVINCIAL TOURISM WEBSITE' content='Siquijor is a perfect getaway anytime of the year, visit the island of healing, immerse in nature and be healed.' link='https://mykhora.com' image={khora} />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <MyCard title='SIQUIJOR PROVINCIAL TOURISM WEBSITE' content='Siquijor is a perfect getaway anytime of the year, visit the island of healing, immerse in nature and be healed.' link='https://siquijorprovine.com' image={siquijor} />
                        </Grid>
                    </Grid>
                ) }
            </Box>
            
        </div>
    );
}

export default Work;