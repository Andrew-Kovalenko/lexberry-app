import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexGrow: 1
  },
  clientBlock: {
    marginTop: theme.spacing(2),
    padding: theme.spacing(3),
    flexGrow: 1,
    background: 'white'
  },
  submitBtn: {
    marginTop: theme.spacing(2),
  },
  declarantsBlock: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    padding: theme.spacing(3),
    flexGrow: 1,
    background: 'white'
  },
  Button: {
    margin: theme.spacing(2, 0),
  }, 
  Input: {
    flexGrow: 1,
    margin: theme.spacing(1),
    marginLeft: 0
  },

  InputsBox: {
    flexGrow: 1,
    display: 'flex',
  },
  InputBox: {
    display: 'flex',
    flexDirection: 'column',
    width: '50%',
  }
}));