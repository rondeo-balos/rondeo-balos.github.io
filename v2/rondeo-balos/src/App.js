import React, { useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Grid, Typography, Container, Paper, Tabs, Tab, Divider } from '@mui/material';
import Contact from './routes/Contact';
import Logo from './logo.png';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const darkTheme = createTheme({
    palette: {
      mode: 'dark'
    }
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <div style={{ backgroundColor: darkTheme.palette.background.default, height: '100vh' }} >
        <Container>
          <Grid container spacing={2}>
            <Grid item xs={12} md={3}>
              <Paper
                style={{
                  borderRadius: 20,
                  padding: 16,
                  margin: 10,
                }}
              >
                {/* Logo */}
                <Container
                  style={{
                    height: 120, 
                    width: 120, 
                    margin: '16 auto', 
                    marginBottom: 20,
                    borderRadius: 100, 
                    padding: 24,
                    border: 'solid 1px #fff'
                  }}
                >
                  <img src={Logo} alt='Logo' style={{ objectFit: 'contain', width: '100%', height: '100%' }} />
                </Container>
                
                
                {/* Name */}
                <Typography component='span' variant='h5' style={{ marginBottom: 16, textAlign: 'center', display: 'block' }}>Rondeo Balos</Typography>
                
                <Divider style={{ marginBottom: 20 }} />

                {/* Add your sidebar content here */}
                <Container>
                  <Tabs
                    value={activeTab}
                    onChange={handleTabChange}
                    orientation='vertical'
                    variant='scrollable'
                    scrollButtons='auto'
                    indicatorColor='primary'
                  >
                    <Tab label='About' />
                    <Tab label='Work' />
                    <Tab label='Experience' />
                    <Tab label='Contact' />
                  </Tabs>
                </Container>
              </Paper>
            </Grid>
            <Grid item xs={12} md={9}>
              <div style={{ padding: 16 }}>
                {/* Add your main content here */}
                {activeTab === 0 && (
                  <Typography variant='h4' style={{ color: darkTheme.palette.text.primary }}>About</Typography>
                )}
                {activeTab === 1 && (
                  <Typography variant='h4' style={{ color: darkTheme.palette.text.primary }}>Work</Typography>
                )}
                {activeTab === 2 && (
                  <Typography variant='h4' style={{ color: darkTheme.palette.text.primary }}>Experience</Typography>
                )}
                {activeTab === 3 && (
                  <Contact theme={darkTheme} />
                )}
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
    </ThemeProvider>
  );
}

export default App;
