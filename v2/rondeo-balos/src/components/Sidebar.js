import React, { useEffect, useState } from 'react';
import $ from 'jquery';
import { Typography, Container, Paper, Tabs, Tab, Divider, Grid, IconButton, useMediaQuery } from '@mui/material';
import Logo from '../logo.png';
import MenuIcon from '@mui/icons-material/Menu';

function Sidebar({ theme, activeTab, handleTabChange }) {
    const isMobile = useMediaQuery( theme.breakpoints.down( 'md' ) );
    const [expand, setExpand] = useState( true );

    function toggleDropdown() {
        if( !isMobile )
            return;
        if( !expand ) {
            $( '.dropdown-mobile' ).slideDown();
            setExpand( true );
        } else {
            $( '.dropdown-mobile' ).slideUp();
            setExpand( false );
        }
    }

    useEffect(() => {
        if( !isMobile && !expand ) {
            $( '.dropdown-mobile' ).slideToggle();
            setExpand( !expand );
        }
    }, [isMobile, expand]);

    
    return (
        <Paper style={{ borderRadius: 20, padding: 16, margin: 10, minHeight: isMobile ? 'auto' : 'calc(100% - 20px)', boxSizing: 'border-box', marginBottom: '10px' }}>
            <Grid container alignItems="center">
                {/* Logo */}
                <Grid item xs={3} sm={3} md={3} lg={12}>
                    <Container
                        style={{
                            width: isMobile ? 50 : 120,
                            height: isMobile ? 50 : 120,
                            marginBottom: isMobile ? 0 : 20,
                            borderRadius: 100,
                            padding: isMobile ? 5 : 24,
                            border: 'solid 1px #fff'
                        }}
                    >
                        <img src={Logo} alt='Logo' style={{ objectFit: 'contain', width: '100%', height: '100%' }} />
                    </Container>
                </Grid>

                {/* Title */}
                <Grid item xs={6} sm={6} md={6} lg={12} style={{ textAlign: 'center' }}>
                    <Typography component='span' variant='h5' style={{ marginBottom: 16 }}>
                        Rondeo Balos
                    </Typography>
                </Grid>

                {/* Dropdown Button */}
                {isMobile && (
                    <Grid item xs={3} sm={3} md={3} lg={12} style={{ textAlign: 'right' }}>
                        <IconButton onClick={toggleDropdown}>
                            <MenuIcon />
                        </IconButton>
                    </Grid>
                )}
                
            </Grid>

            {/*<Divider style={{ marginBottom: 20 }} />*/}

            {/* Add your sidebar content here */}
            <Container className='dropdown-mobile'>
                <div style={{ height: 20, borderBottom: 'solid 1px rgba(255, 255, 255, 0.12)', marginBottom: 10, marginLeft: -16, marginRight: -16 }} />
                <Tabs
                value={activeTab}
                onChange={handleTabChange}
                orientation='vertical'
                variant='scrollable'
                scrollButtons='auto'
                indicatorColor='primary'
                >
                <Tab label='About' onClick={toggleDropdown} />
                <Tab label='Work' onClick={toggleDropdown} />
                <Tab label='Experience' onClick={toggleDropdown} />
                <Tab label='Contact' onClick={toggleDropdown} />
                </Tabs>
            </Container>
        </Paper>
    );
}

export default Sidebar;
