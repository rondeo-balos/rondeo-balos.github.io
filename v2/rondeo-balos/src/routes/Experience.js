import React from 'react';
import { Typography, Box, Card, Stack, Chip, Divider } from '@mui/material';
import LocationOn from '@mui/icons-material/LocationOn';
import CalendarToday from '@mui/icons-material/CalendarToday';

import Exp from '../components/Exp';

function Experience( {theme} ) {
    return (
        <div>
            <Typography variant='h4' className='heading' color='text.primary'>
                <span>Experience</span>
            </Typography>
            <Box className='content-body'>
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
            </Box>
            
        </div>
    );
}

export default Experience;