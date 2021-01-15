import React from 'react';
import {TextField, Container, Typography, Box} from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Autocomplete from '@material-ui/lab/Autocomplete';
import {useDispatch, useSelector} from 'react-redux'
import {FETCH_ClIENTS, FETCH_DECLARANTS} from '../redux/types'

import {getClients, setCurrentClient, getDeclarants} from '../redux/actions';
import {useStyles} from './Styles';
import {showData} from './showData'

function ClientBlock() {
  const classes = useStyles();
  const dispatch = useDispatch()
  const clients = useSelector((state) => state.clients.clients)
  const client = useSelector((state) => state.clients.client)
  const declarants = useSelector((state) => state.declarants.declarants)
  const newDeclarants = useSelector((state) => state.declarants.newDeclarants)
  
  const saveHandler = () => {
    showData(client, declarants, newDeclarants)
  }

  const autocompleteHandler = (value) => {
    dispatch(setCurrentClient(value))
    if (value) {
      dispatch(getDeclarants())
    }
  }

  let clientData;
  if (client) {
    clientData = 
      <Box>
        <Typography variant="body2">ФІО: {client.name}</Typography>
        <Typography variant="body2">Телефон: {client.phone}</Typography>
        <Typography variant="body2">Email: {client.email}</Typography>
        <Box>
          <Button onClick={saveHandler} className={classes.submitBtn} variant="contained" color="primary" href="#contained-buttons">
            Зберігти заявку
          </Button>
        </Box>
      </Box>
    
  } else {
    clientData = null
  }
  
  return (
    <div className={classes.root} >
    <Container maxWidth="md" className={classes.clientBlock} >
      <Typography variant="h4">Кліент</Typography>
      <Autocomplete
        onInputChange={(event, newInputValue) => {
          if (newInputValue.length >= 3) {
            dispatch(getClients())
          } else {
            dispatch({ type: FETCH_ClIENTS, payload: [] })
            dispatch({ type: FETCH_DECLARANTS, payload: [] })
          }
        }}
        onChange={(event, newValue) => {
          autocompleteHandler(newValue)
        }}
        id="auto-complete"
        options={clients.length >= 1 ? clients : []}
        getOptionLabel={(option) => option.name}
        autoComplete
        style={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Customer Search / Selection" margin="normal" />}
      /> 

      {clientData}
      </Container>
    </div>
  );
}

export default ClientBlock;
