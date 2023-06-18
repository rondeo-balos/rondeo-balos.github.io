import React from 'react';
import { Typography, Box, Card, Stack, Chip, Divider } from '@mui/material';
import LocationOn from '@mui/icons-material/LocationOn';
import CalendarToday from '@mui/icons-material/CalendarToday';

function Exp( {theme, position, company, place, date, skills} ) {
    return (
        <Card sx={{ marginBottom: 3 }}>
            <Box sx={{ p: 2, display: 'flex' }}>
                <Stack spacing={0.8}>
                    <Typography fontWeight={700}>{position}</Typography>
                    <Typography>{company}</Typography>
                    <Typography variant='body2' color='text.secondary'>
                        <LocationOn sx={{color: '#555', verticalAlign: 'middle' }} fontSize='small' /> {place}
                    </Typography>
                    <Typography variant='body2' color='text.secondary'>
                        <CalendarToday sx={{color: '#555', verticalAlign: 'middle' }} fontSize='small' /> {date}
                    </Typography>
                </Stack>
            </Box>
            <Divider />
            <Stack
                direction='row'
                alignItems='center'
                flexWrap='wrap'
                spacing='10px'
                sx={{ px: 2, py: 1, bgcolor: 'background.default', '& > *': { my: 1 } }}
            >
                { Array.isArray( skills ) &&
                    skills.map((item, index) => {
                        return <Chip label={item}/>
                    })
                }
            </Stack>
        </Card>
    );
}

export default Exp;