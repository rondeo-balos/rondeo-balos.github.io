import React, { useEffect, useState } from 'react';
import { Typography, Box, Skeleton } from '@mui/material';

import Exp from '../components/Exp';

function Experience( {theme} ) {
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
                <span>Experience</span>
            </Typography>
            <Box className='content-body'>
                { isLoading ? (
                    <div>
                        <Skeleton variant="rectangular" width="100%" height={150} animation="wave" sx={{ marginBottom: 3 }} />
                        <Skeleton variant="rectangular" width="100%" height={150} animation="wave" sx={{ marginBottom: 3 }} />
                        <Skeleton variant="rectangular" width="100%" height={150} animation="wave" sx={{ marginBottom: 3 }} />
                    </div>
                ) : (
                    <div>
                        <Exp title='Full Stack Developer' company='Freelance' place='Larena, Siquijor &bull; Remote' date='Jan 2023 - Present'
                            skills={[
                                'HTML', 'LibGdx', 'Firebase', 'JSON', 'jQuery', 'React.js', 'Elementor', 'Java', 'Javascript', 'Wordpress', 'Shopify', 'Shopify +', 'PHP', 'MySQL'
                            ]}
                        />
                        <Exp title='Account Specialist' company='Siquitech Global Solutions Inc.' place='Larena, Siquijor' date='Aug 2021 - Dec 2022 &bull 1yr 5mos'
                            skills={[
                                'HTML', 'LibGdx', 'Firebase', 'JSON', 'jQuery', 'CSS', 'Elementor', 'Java', 'Javascript', 'Wordpress', 'PHP', 'MySQL'
                            ]}
                        />
                        <Exp title='Tech VA' company='White Glove Solutions' place='Larena, Siquijor &bull Remote' date='May 2020 - Feb 2021 &bull 10mos'
                            skills={[
                                'HTML', 'CSS', 'Firebase', 'JSON', 'jQuery', 'Java', 'Javascript', 'PHP', 'MySQL'
                            ]}
                        />
                    </div>
                ) }
                
            </Box>
            
        </div>
    );
}

export default Experience;