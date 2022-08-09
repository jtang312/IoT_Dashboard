import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { AppBar, Box, Grid, Toolbar, Typography, IconButton } from '@mui/material';
import data from './dataStruct.json';
import Badge from './components/Badge';

const theme = createTheme({
  typography: {
    fontFamily: [
      "Roboto"
    ].join(",")
  },
  palette: {
    primary: {
      light: '#757ce8',
      main: '#bfbfbf',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
});

class App extends React.Component {

  constructor(props) {
    super(props);
    // can use later to generate real remainingEnergy and currentOutput
    this.state = {
      remainingEnergy: 30,
      currentOutput: 70
    }
  }

  componentDidUpdate() {
    window.initMap();
  }

  render() {
    return (
      <div>
        <ThemeProvider theme={theme}>
          <AppBar color="primary" position="static">
            <Toolbar variant="dense">
              <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
              </IconButton>
              <Typography variant="h6" color="inherit" component="div">
                <img style={{width: '5vh', height: '5vh'}} src={'https://tecium.com/wp-content/uploads/2019/05/TCM_Logo-02-01.png'} alt={'NA'} />
              </Typography>
            </Toolbar>
          </AppBar>
          <Box sx={{
            display: 'flex',
            minHeight: '80vh',
            justifyContent: 'center',
            flexDirection: 'column',
            backgroundColor: ' #00001a',
          }}>

            <Box sx={{
              flexGrow: 1,
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              height: '60vh',
              border: '2px solid white',
              padding: 5,
            }}>
                <img style={{width: '30%', maxHeight: '50vh'}}src={'https://community-assets.home-assistant.io/original/3X/b/f/bfe10a1e78f3ac29f94f2dcba139412c70bd7858.jpeg'} alt={'NA'}/>
                <div id="map" style={{height: '60vh', width: '40vh'}}>map</div>
                <img style={{width: '30%', maxHeight: '50vh'}}src={'https://community-assets.home-assistant.io/original/3X/b/f/bfe10a1e78f3ac29f94f2dcba139412c70bd7858.jpeg'} alt={'NA'}/>
            </Box>
            
            <Box sx={{
              flexGrow: 1,
              border: '2px solid white',
              height: '20vh',
              padding: 5,            
            }}>
              <Grid container spacing={4}>
                {data.content.map((item, i)=> (
                  <Grid key={i} item xs={3} md={3}>
                    <Badge item={item._badge}/>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Box>
        </ThemeProvider>
      </div>
    );
  }
}

export default App;
