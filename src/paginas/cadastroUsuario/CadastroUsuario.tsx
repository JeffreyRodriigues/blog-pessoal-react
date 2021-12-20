import React, { useState, useEffect, ChangeEvent } from 'react';
import { useHistory } from 'react-router-dom';
import User from '../../models/User';
import { cadastroUsuario } from '../../services/Service';
import { Grid, Box, Typography, Button, TextField } from '@material-ui/core';
import { Link } from 'react-router-dom';
import './CadastroUsuario.css';

function CadastroUsuario() {

  let history = useHistory();
  const [confirmarSenha, setConfirmarSenha] = useState<String>("") //verificar se o valor confirmar senha e o senha estejam iguais
  const [user, setUser] = useState<User>( //Vai enviar as informações de cadastro
    {
      id: 0,
      nome: '',
      usuario: '',
      senha: ''
    })

  const [userResult, setUserResults] = useState<User>( //armazena os valores do retorno da API no UserResult
    {
      id: 0,
      nome: '',
      usuario: '',
      senha: ''
    })

  useEffect(() => {  //Após o cadastro, vai direcionar o usuário para a tela de login
    if (userResult.id != 0) {
      history.push("/login")
      console.log(userResult)
    }
  }, [userResult])

  function confirmarSenhaHandle(e: ChangeEvent<HTMLInputElement>) { //captura o dado digitado e armazena
    setConfirmarSenha(e.target.value)
  }

  function updatedModel(e: ChangeEvent<HTMLInputElement>) {

    setUser({
      ...user,
      [e.target.name]: e.target.value
    })

  }
  async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault() //não atualizar a tela
    if (confirmarSenha == user.senha) { //compara as duas senhas
      cadastroUsuario(`/usuarios/cadastrar`, user, setUserResults) //aciona o service cadastroUsuario, adicionando na rota do endpoint
      alert('Usuário cadastrado com sucesso!')
    } else {
      alert('Dados inconsistentes. Favor verificar as informações de cadastro.')
    }
  }

  return (
    <Grid container direction='row' justifyContent='center' alignItems='center'>
      <Grid item xs={6} className='imagem2'></Grid>
      <Grid item xs={6} alignItems='center'>
        <Box paddingX={10}>
          <form onSubmit={onSubmit}>
            <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align='center' className="textos2">Cadastrar</Typography>
            <TextField value={user.nome} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='nome' label='nome' variant='outlined' name='nome' margin='normal' fullWidth />
            <TextField value={user.usuario} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='usuario' label='usuario' variant='outlined' name='usuario' margin='normal' fullWidth />
            <TextField value={user.senha} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='senha' label='senha' variant='outlined' name='senha' margin='normal' type='password' fullWidth />
            <TextField value={confirmarSenha} onChange={(e: ChangeEvent<HTMLInputElement>) => confirmarSenhaHandle(e)} id='confirmarSenha' label='confirmarSenha' variant='outlined' name='confirmarSenha' margin='normal' type='password' fullWidth />
            <Box marginTop={2} textAlign='center'>
              <Link to='./login' className='text-decorator-none'>
                <Button variant='contained' color='secondary' className='btnCancelar' >
                  Cancelar
                </Button>
              </Link>
              <Button type='submit' variant='contained' color='primary' className='btnCadastrar' >
                Cadastrar
              </Button>
            </Box>
          </form>
        </Box>
      </Grid>

    </Grid>
  );
}

export default CadastroUsuario;