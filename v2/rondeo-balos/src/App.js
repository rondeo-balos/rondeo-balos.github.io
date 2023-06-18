import React, { useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Grid, Typography, Container, useMediaQuery } from '@mui/material';
import Sidebar from './components/Sidebar';
import Contact from './routes/Contact';
import About from './routes/About';

import './App.css';
import background from './assets/background.jpg';
import Work from './routes/Work';
import Experience from './routes/Experience';

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
  
  const isMobile = useMediaQuery( darkTheme.breakpoints.down( 'md' ) );

  return (
    <ThemeProvider theme={darkTheme}>
      <div style={{ 
        backgroundColor: `${darkTheme.palette.background.default+'44'}`, 
        height: isMobile ? 'auto' : '100vh', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center'
      }} >
        <Container className='main-content' style={{ display: 'flex' }}>
          <Grid container spacing={2} style={{ flex: 1 }}>
            <Grid item xs={12} md={3}>
              <Sidebar theme={darkTheme} activeTab={activeTab} handleTabChange={handleTabChange}/>
            </Grid>
            <Grid item xs={12} md={9}>
              <div style={{ padding: 16 }}>
                {/* Add your main content here */}
                {activeTab === 0 && (
                  <About theme={darkTheme} />
                )}
                {activeTab === 1 && (
                  <Work theme={darkTheme} />
                )}
                {activeTab === 2 && (
                  <Experience theme={darkTheme} />
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
