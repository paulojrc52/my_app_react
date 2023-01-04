import { useRef, useState, useEffect } from 'react'
import clsx from 'clsx'

import {
  CircularProgress,
  Button,
} from '@material-ui/core'

import useStyles from './MyButton.styles'

const MyButton = ({ 
  loading, 
  buttonText,
  formError, 
  onClick,
  isToasty,
}) => {
  
  const classes = useStyles()
  const timer = useRef()
  
  const [success, setSuccess] = useState(false)
  
  const buttonClasseName = clsx({
    [classes.buttonSuccess]: success,
  })

  const handleButtonClick = () => {
    onClick() 
    loading = false
    let erro = false

    if(formError){(erro = true)} 

    if(!erro){
      setSuccess(false)
      loading = true
      timer.current = window.setTimeout(() => {
        setSuccess(loading)
        loading = false  
      }, 1000)
    }
    return setSuccess(loading)
  }

  useEffect(() => {
    return() => {
      clearTimeout(timer.current)
    }
  }, [])
  
  return(
    
    <div className={classes.root}>
      <div className={classes.wrapper}>
        <Button 
          variant="contained" 
          color="primary"
          className={isToasty && buttonClasseName }
          disabled={loading}
          onClick={handleButtonClick}
          >
            {loading 
              ? 'Aguarde...' 
              : buttonText 
              && success && isToasty 
              ? 'Concluído' 
              : buttonText
            }
        </Button>
        {
        loading && 
        <CircularProgress 
          size={24} 
          className={classes.buttonProgress} 
          />
        }
        
      </div>
    </div>
  )
}

export default MyButton