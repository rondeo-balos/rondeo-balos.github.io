import React from 'react';
import { Typography, TextField, Button, Box, IconButton, Stack } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import DeleteIcon from '@mui/icons-material/Delete';

import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LinkIcon from '@mui/icons-material/Link';
import GitHubIcon from '@mui/icons-material/GitHub';

function Contact( {theme} ) {
    return (
        <div>
            <Typography variant='h4' component='h1' className='heading' color='text.primary'>
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
            <div style={{ height: 50 }}/>
            <Stack
                direction='row'
                alignItems='center'
                flexWrap='wrap'
                spacing='20px'
            >
                <IconButton aria-label='whatsapp' href='https://wa.me/639615936086' rel='nofollow' target='_blank'
                    sx={{
                        width: 48,
                        height: 48,
                        border: '2px solid',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                >
                    <WhatsAppIcon />
                </IconButton>
                <IconButton aria-label='linkedin' href='https://www.linkedin.com/in/rondeo-balos/' rel='nofollow' target='_blank'
                    sx={{
                        width: 48,
                        height: 48,
                        border: '2px solid',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                >
                    <LinkedInIcon />
                </IconButton>
                <IconButton aria-label='itch.io' href='https://rondeo.itch.io/' rel='nofollow' target='_blank'
                    sx={{
                        width: 48,
                        height: 48,
                        border: '2px solid',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                >
                    <LinkIcon />
                </IconButton>
                <IconButton aria-label='github' href='https://github.com/rondeo-balos' rel='nofollow' target='_blank'
                    sx={{
                        width: 48,
                        height: 48,
                        border: '2px solid',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                >
                    <GitHubIcon />
                </IconButton>
                <IconButton aria-label='playstore' href='https://play.google.com/store/apps/dev?id=8521617602390433142' rel='nofollow' target='_blank'
                    sx={{
                        width: 48,
                        height: 48,
                        border: '2px solid',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                >
                    <LinkIcon />
                </IconButton>
            </Stack>
        </div>
    );
}

export default Contact;