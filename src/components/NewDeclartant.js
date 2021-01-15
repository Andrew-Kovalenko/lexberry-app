import {Container, Box, TextField, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, Button } from '@material-ui/core';
import React, {useState} from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete';
import {useStyles} from './Styles';
import {useDispatch} from 'react-redux'
import {updateNewCurrentDeclarant, pushNewDeclarant, updateNewDeclarantsArray} from '../redux/actions'

export default function NewDeclartant({visibleForm, setVisibleForm}) {
  const classes = useStyles();
  const dispatch = useDispatch()
  const [country, setCountry] = useState(['Украина', 'Грузия', 'Казахстан']);
  const [currentCountry, setCurrentCountry] = useState();
  const [declarant, setDeclarant] = useState({
    businessEntity: '', 
    country: '', 
    name: '', 
    edrpou: '', 
    title: '', 
    adress: '', 
    motherlandTitle: '', 
    motherlandAdress: ''}
  );

  const handleSubmit = () => {
    dispatch(updateNewDeclarantsArray(declarant))
    dispatch(pushNewDeclarant(declarant))
    setVisibleForm()
  }

  const handleInputChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    setDeclarant({...declarant, [name]: value})
    dispatch(updateNewCurrentDeclarant(declarant))
  }

  let AdditionalBlock;
  if (currentCountry !== 'Украина') {
    AdditionalBlock = 
    <Box className={classes.InputBox}>
      <TextField value={declarant.motherlandTitle} onChange={handleInputChange} name="motherlandTitle" fullWidth className={classes.Input} id="outlined-basic" label="Назва мовою походження" variant="outlined" />
      <TextField value={declarant.motherlandAdress} onChange={handleInputChange} name="motherlandAdress" fullWidth className={classes.Input} id="outlined-basic" label="Адреса мовою походження" variant="outlined" />
    </Box>
  } else {
    AdditionalBlock = null
  }

  let form;
  if (visibleForm) {
    form =
    <>
      <form noValidate onSubmit={handleSubmit}>
      <FormControl component="fieldset">
        <FormLabel component="legend">Додати нового</FormLabel>
        <RadioGroup aria-label="businessEntity" onChange={handleInputChange} name="businessEntity" >
          <FormControlLabel value="Private person" control={<Radio  color="primary"/>} label="Фізична особа" />
          <FormControlLabel value="Legal person" control={<Radio  color="primary"/>} label="Юридична особа" />
        </RadioGroup>
      </FormControl>
      <Container>
        <Box>
          <Autocomplete
            onChange={(event, newValue) => {
              setCurrentCountry(newValue)
            }}
            name="country"
            id="auto-complete"
            options={country}
            getOptionLabel={(option) => option}
            autoComplete
            style={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="Оберіть країну" margin="normal" />}
          /> 
        </Box>
        
          <TextField value={declarant.name} onChange={handleInputChange} name="name" fullWidth width='2' className={classes.Input} id="outlined-basic" label="Ім'я" variant="outlined" />
          <TextField value={declarant.edrpou} onChange={handleInputChange} name="edrpou" fullWidth className={classes.Input} id="outlined-basic" label="ЄДРПОУ" variant="outlined" />
            <Box  className={classes.InputsBox}>
              <Box  className={classes.InputBox}>
                <TextField value={declarant.title} onChange={handleInputChange} className={classes.Input} name="title" id="outlined-basic" label="Назва" variant="outlined" />
                <TextField value={declarant.adress} onChange={handleInputChange}  className={classes.Input} name="adress" id="outlined-basic" label="Адреса" variant="outlined" />
              </Box>
              {AdditionalBlock}
            </Box>
        </Container>
        <Button onClick={handleSubmit}>Додати</Button>
      </form>
    </>
  } else {
    form = null
  }

  return (
    <>
      {form}
    </>
  )
}