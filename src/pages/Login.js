import { useState } from 'react'
import { makeStyles, TextField } from '@material-ui/core'
import { Typography } from '@material-ui/core'
import MyButton from '../components/button/MyButton'

const useStyles = makeStyles((theme) => ({
  wrapper: {
    margin:theme.spacing(3),
  }
}))

const Login = () => {
  const classes = useStyles()

  const [form, setForm] = useState({
    email:'',
    password:'',
  })

  const handleInputChange = event => {
    const { name, value } = event.target

    setForm({
      ...form,
      [name]: value,
    })
  }

  const handleFormSubmit = () => {
    console.log(form)
  }


  return(
    <>
      <Typography variant='h3' align='center'> Acesso Restrito</Typography> 
      <div className={classes.wrapper}>
        <TextField
          onChange={handleInputChange}
          label='Digite o seu email'
          name='email'
        />
      </div>

      <div className={classes.wrapper}>
        <TextField
          onChange={handleInputChange}
          label='Digite sua senha'
          name='password'
          type='password'
        />
      </div>

      <div className={classes.wrapper}>
        <MyButton buttonText='Entrar' onClick={handleFormSubmit}/>
      </div>
    
    </>
  )
}

export default Login