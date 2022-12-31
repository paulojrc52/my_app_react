import { useState, useEffect } from "react"
import axios from 'axios'

import { Grid } from "@material-ui/core"
import { makeStyles } from "@material-ui/styles"

import CustomerCard from "../components/CustomerCard"

const useStyles = makeStyles(theme => ({
  root:{
    flexGrow: 1,
  },
  card: {
    margin: theme.spacing(4)
  },
}))

const Customers = () => {
  const classes = useStyles()

  const [customers, setCustomer] = useState([])

  useEffect(() => {
    axios.get('https://reqres.in/api/users')
      .then(response => {
        const { data } = response.data
        setCustomer(data)
    })
  }, [])

  return(
    <Grid container>
      {
        customers.map(customer => (
          <Grid item xs={12} sm={6} md={4}>
            <CustomerCard 
              name={customer.first_name}
              lastname={customer.last_name}
              email={customer.email}
              avatar={customer.avatar}
              className={classes.card}
            />
          </Grid>
          ))
        }
    </Grid>
  )
}

export default Customers