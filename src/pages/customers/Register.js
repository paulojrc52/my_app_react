import { useState } from "react"
import axios from "axios"

import { makeStyles } from "@material-ui/styles"
import { TextField } from "@material-ui/core" 

import Toasty from "../../components/Toasty"
import MyButton from "../../components/button/MyButton"

const useStyles = makeStyles(theme =>({
  wrapper: {
    margin: theme.spacing(3),
  }
}))

const Register = () => {
  const classes = useStyles()

  const [form, setForm] = useState({
    name: {
      value: '',
      error: false,  
    } ,
    job: {
      value: '',
      error: false,  
    },
  })

  const [openToasty, setOpenToasty] = useState({
    open:false,
    text:'Cadastro Realizado com Sucesso!'
  })

  const [isLoadingButton, setIsLoadingButton] = useState(false)

  const handleInputChange = (event) => {
    const { name, value } = event.target

    setForm({
      ...form,
      [name]: {
        value,
      } ,
    })
  }

  const handleRegisterButton = () => {
    let hasError = false
    
    let newFormState ={
      ...form,
    }

    if(!form.name.value) {
      hasError = true
      newFormState.name ={
        value:form.name.value,
        error: true,
        helperText: 'Digite o campo nome corretamente'
      }
    }

    if(!form.job.value) {
      hasError = true
      newFormState.job ={
        value:form.job.value,
        error: true,
        helperText: 'Digite o campo cargo corretamente'
      }
    }

    if(hasError) {
      return setForm(newFormState)
    }

    setIsLoadingButton(true)

    axios.post('https://reqres.in/api/users', {
      name: form.name.value,
      job: form.job.value
    }).then(() => {
        let newStateToasty = {
          ...openToasty,
          open: true,
        }

        setOpenToasty(newStateToasty)

        setForm({
          name: {
            value: '',
            error: false
          },  
          job: {
            value: '',
            error: false
          },  
        })

        setIsLoadingButton(false)
      })
  }

  return(
      <>
        <div className={classes.wrapper}>
          <TextField 
            error={form.name.error}
            helperText={form.name.error ? form.name.helperText : ''}
            label='Digite o seu nome' 
            name="name" 
            value={form.name.value} 
            onChange={handleInputChange} 
          />
        </div>

        <div className={classes.wrapper}>
          <TextField 
            error={form.job.error}
            helperText={form.job.error ? form.job.helperText : ''}
            label='Digite o seu cargo' 
            name="job" 
            value={form.job.value} 
            onChange={handleInputChange} 
          />
        </div>

        <div className={classes.wrapper}>
          <MyButton 
            loading={isLoadingButton}
            buttonText='Cadastrar'
            formError={form.job.error && form.name.error ? true : false}
            onClick={handleRegisterButton}
            isToasty={openToasty.open}
          />
        </div>

        <Toasty
          open={openToasty.open} 
          severity="success" 
          onClose={() => setOpenToasty({
            ...openToasty,
            open: false,
          })}  
          text={openToasty.text} 
        />
      </>
  )
}

export default Register