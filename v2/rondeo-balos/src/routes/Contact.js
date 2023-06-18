import React from 'react';
import { Typography, TextField, Button, Box } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import DeleteIcon from '@mui/icons-material/Delete';

function Contact( {theme} ) {
    return (
        <div>
            <Typography variant='h4' className='heading' color='text.primary'>
                <span>Contact</span>
            </Typography>
            <form>
                <Box>
                    <TextField label='Subject' variant='outlined' margin='normal' fullWidth required/>
                </Box>
                <Box>
                    <TextField label='Email' variant='outlined' margin='normal' type={'email'} fullWidth required/>
                </Box>
                <Box>
                    <TextField label='Subject' variant='outlined' margin='normal' multiline minRows={3} fullWidth required/>
                </Box>
                
                <div style={{ marginTop: 16, marginRight: 16, display: 'inline-block' }} >
                    <Button variant='contained' size='large' margin='normal' endIcon={<SendIcon />}>Send Message</Button>
                </div>
                <div style={{ marginTop: 16, display: 'inline-block' }} >
                    <Button variant='outlined' size='large' margin='normal' endIcon={<DeleteIcon />}>Reset</Button>
                </div>
            </form>
        </div>
    );
}

export default Contact;