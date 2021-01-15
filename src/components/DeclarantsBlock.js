import React, {useState} from 'react';
import {useSelector} from 'react-redux'
import {FormControlLabel, Checkbox, Container, Typography, Box} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';

import NewDeclartant from './NewDeclartant'
import {useStyles} from './Styles';
import {showData} from './showData'


function DeclarantsBlock() {
  const classes = useStyles();
  const [visibleForm, setVisibleForm] = useState(false);
  const client = useSelector((state) => state.clients.client)
  const declarants = useSelector((state) => state.declarants.declarants)
  const newDeclarants = useSelector((state) => state.declarants.newDeclarants)
  
  const saveHandler = () => {
    showData(client, declarants, newDeclarants)
  }

  let renderDeclarants;
  if (declarants.length !== 0) {
    renderDeclarants = declarants.map((declarant, index) => {
      return (
      <Box key={index}>  
        <FormControlLabel
          control={
            <Checkbox
              name="checkedB"
              color="primary"
            />
          }
          label={declarant.name}
        />
      </Box>
      )
    })
  } else {
    renderDeclarants = null
  }

  return (
    <div className={classes.root} >
      <Container maxWidth="md" className={classes.declarantsBlock} >
        <Typography variant="h4">Заявники</Typography>

        {renderDeclarants}
        <Box className={classes.Button}>
          <Button onClick={() => setVisibleForm(!visibleForm)}variant="outlined" color="primary">
          Додати<AddIcon fontSize="small"></AddIcon>
          </Button>
        </Box>

        <NewDeclartant visibleForm={visibleForm} setVisibleForm={setVisibleForm}/>
        
        <Box className={classes.Button}>
          <Button onClick={saveHandler} variant="contained" color="primary" href="#contained-buttons">
            Зберігти заявку
          </Button>
        </Box>
      </Container>
    </div>
  );
}

export default DeclarantsBlock;