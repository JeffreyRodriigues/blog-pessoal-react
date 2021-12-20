import React from 'react';
import { AppBar, Toolbar, Typography, Box } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';
import './NavBar.css';

function NavBar() {
  const [token, setToken] = useLocalStorage('token');
  let history = useHistory();

  function goLogout() {
    setToken('')
    alert("Usuário deslogado")
    history.push('/login')
  }

  return (
    <>
      <AppBar position="static">
        <Toolbar variant="dense" className="navbar">
          <Box className='cursor'>
            <Typography variant="h5" color="inherit" className='text'>
              O RANGO!
            </Typography>
          </Box>

          <Box display="flex" justifyContent="start">
            <Link to='/home' className='text-decorator-none'>
              <Box mx={1} className='cursor'>
                <Typography variant="h6" color="inherit" className='text'>
                  Home
                </Typography>
              </Box>
            </Link>
            <Link to='/posts' className='text-decorator-none'>
              <Box mx={1} className='cursor'>
                <Typography variant="h6" color="inherit" className='text'>
                  Postagens
                </Typography>
              </Box>
            </Link>
            <Link to='/temas' className='text-decorator-none'>
              <Box mx={1} className='cursor'>
                <Typography variant="h6" color="inherit" className='text'>
                  Temas
                </Typography>
              </Box>
            </Link>
            <Link to='/formularioTema' className='text-decorator-none'>
              <Box mx={1} className='cursor'>
                <Typography variant="h6" color="inherit" className='text'>
                  Cadastrar tema
                </Typography>
              </Box>
            </Link>
            <Box mx={1} className='cursor' onClick={goLogout}>
              <Typography variant="h6" color="inherit" className='text'>
                Login
              </Typography>
            </Box>
          </Box>

        </Toolbar>
      </AppBar>
    </>
  )
}

export default NavBar;