import React from 'react';
import { Typography, Box, Grid, Button } from '@material-ui/core';
import './Home.css';
import CarouselComponent from '../../components/carousel/CarouselComponent';

function Home() {
  return (
    <>

      <Grid container direction="row" justifyContent="center" alignItems="center" style={{ backgroundColor: "white" }}>
        <Grid alignItems="center" item xs={6}>
          <Box paddingX={20} >
            <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" style={{ color: "#C53F3F", fontWeight: "bold" }}>Seja bem vindo ao Rango!</Typography>
            <Typography variant="h5" gutterBottom color="textPrimary" component="h6" align="center" style={{ color: "black", fontWeight: "regular" }}>A galera gosta de compartilhar receitas. Você vai ficar de fora?</Typography>
          </Box>
          <Box display="flex" justifyContent="center">
            <Box marginRight={1}>
            </Box>
            <Button variant="outlined" style={{ borderColor: "white", backgroundColor: "#C53F3F", color: "white" }}>Ver Receitas</Button>
          </Box>
        </Grid>
        <Grid item xs={6} >
          <img src="https://i.imgur.com/IxflXkb.png" alt="" width="500px" height="500px" />
        </Grid>
        <Grid xs={12} style={{ backgroundColor: "white" }}>
        </Grid>
      </Grid>
      <Grid container direction="row" justifyContent="center" alignItems="center" style={{ backgroundColor: "#EFDBDB" }}>
        <Grid xs={12} className='banner'>
          <Box marginTop={1} padding={1} >
            <CarouselComponent />
          </Box>
        </Grid>
      </Grid>

    </>
  );
}

export default Home;