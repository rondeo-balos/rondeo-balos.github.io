import React, { useState } from 'react';
import { Typography, TextField, Button } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import DeleteIcon from '@mui/icons-material/Delete';

function Contact( {theme} ) {
    return (
        <div>
            <Typography variant='h4' style={{ color: theme.palette.text.primary }}>Contact</Typography>
            <form>
                <TextField id="outlined-basic" label="Subject" variant="outlined" margin="normal" required/>
                <TextField id="outlined-basic" label="Subject" variant="outlined" margin="normal" multiline minRows={3} fullWidth required/>
                <div style={{ marginTop: 16, marginRight: 16, display: 'inline-block' }} >
                    <Button variant="outlined" size="large" margin="normal" endIcon={<SendIcon />}>Send</Button>
                </div>
                <div style={{ marginTop: 16, display: 'inline-block' }} >
                    <Button variant="outlined" size="large" margin="normal" endIcon={<DeleteIcon />}>Reset</Button>
                </div>
            </form>
        </div>
    );
}

export default Contact;