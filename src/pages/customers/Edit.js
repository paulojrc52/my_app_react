import { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

import { makeStyles } from '@material-ui/styles'
import { TextField } from '@material-ui/core' 

import Toasty from '../../components/Toasty'
import MyButton from '../../components/button/MyButton'

const useStyles = makeStyles(theme =>({
  wrapper: {
    margin: theme.spacing(3),
  }
}))

const Edit = () => {
  const classes = useStyles()
  const { id } = useParams()

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
    text:'Cliente atualizado com sucesso!'
  })
  const [isLoadingButton, setIsLoadingButton] = useState(false)
  
  useEffect(() => {
    axios.get(`http://reqres.in/api/users/${id}`)
      .then( response => {
        const { data } = response.data
        setForm({
          name: {
            ...form.name,
            value: data.first_name,
          } ,
          job: {
            ...form.job,
            value: data.job,
            
          },
        })
      })
  }, [])


  const handleInputChange = (event) => {
    const { name, value } = event.target

    setForm({
      ...form,
      [name]: {
        value,
      } ,
    })
  }

  const handleEditButton = () => {
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

    axios.put(`https://reqres.in/api/users/${id}`, {
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
            buttonText='Salvar'
            formError={form.job.error && form.name.error ? true : false}
            onClick={handleEditButton}
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

export default Edit