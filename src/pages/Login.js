import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { makeStyles, TextField } from '@material-ui/core'
import { Typography } from '@material-ui/core'

import MyButton from '../components/button/MyButton'
import useAuth from '../state/auth'

const useStyles = makeStyles((theme) => ({
  wrapper: {
    margin:theme.spacing(3),
  }
}))

const Login = () => {
  const classes = useStyles()
  const history = useHistory()

  const [form, setForm] = useState({
    email:'',
    password:'',
  })

  const [isLoading, setIsLoading] = useState(false)

  const { user, setUser } = useAuth({})

  const handleInputChange = event => {
    const { name, value } = event.target

    setForm({
      ...form,
      [name]: value,
    })
  }

  const handleFormSubmit = () => {
    setIsLoading(true)

    setTimeout(() => {
      setUser({
        logged: true,
        email: form.email,
      })

      history.push('/')
    }, 3000)
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
        <MyButton
          buttonText='Entrar' 
          onClick={handleFormSubmit}
          loading={isLoading}
        />
      </div>
    
    </>
  )
}

export default Login