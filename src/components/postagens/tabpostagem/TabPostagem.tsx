import React, { useState } from 'react'
import { AppBar, Tab, Tabs, Typography, Box } from '@material-ui/core';
import { TabContext, TabPanel } from '@material-ui/lab';
import ListaPostagem from '../listapostagem/ListaPostagem';
import './TabPostagem.css';


function TabPostagem() {
  const [value, setValue] = useState('1')
  function handleChange(event: React.ChangeEvent<{}>, newValue: string) {
    setValue(newValue);
  }
  return (
    <>
      <TabContext value={value}>
        <AppBar position="static" className="postbar">
          <Tabs centered indicatorColor="secondary" onChange={handleChange}>
            <Tab label="Todas as receitas" value="1" />
            <Tab label="Sobre-nós" value="2" />
          </Tabs>
        </AppBar>
        <TabPanel value="1" >
          <Box display="flex" flexWrap="wrap" justifyContent="center" width={1 / 4}>
            <ListaPostagem />
          </Box>
        </TabPanel>
        <TabPanel value="2">
          <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" className="titulo">Sobre-nós</Typography>
          <Typography variant="body1" gutterBottom color="textPrimary" align="justify">Mais do que uma companhia de mídia moderna, a Rango é uma comunidade global com raízes em vários cantos do mundo que engaja mensalmente milhões de viewers. No Brasil, a Rango ampliou seu repertório ao trazer pautas que vão além da cozinha e inspiram uma audiência diversa. Os programas de nossa grade dão voz a novos criadores de conteúdo e personagens que têm como objetivo divertir, ensinar e gerar conversas.Tudo isso através de uma linguagem descontraída e nativamente digital.</Typography>
        </TabPanel>
      </TabContext>
    </>
  );
}
export default TabPostagem;