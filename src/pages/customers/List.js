import { useState, useEffect } from "react"
import axios from 'axios'
import { useHistory } from "react-router-dom"

import { makeStyles } from "@material-ui/styles"
import { Grid } from "@material-ui/core"

import CustomerCard from "../../components/CustomerCard"

const useStyles = makeStyles(theme => ({
  root:{
    flexGrow: 1,
  },
  card: {
    margin: theme.spacing(4)
  },
}))

const List = () => {
  const classes = useStyles()
  const history = useHistory()

  const [customers, setCustomer] = useState([])

  useEffect(() => {
    axios.get('https://reqres.in/api/users')
      .then(response => {
        const { data } = response.data
        setCustomer(data)
    })
  }, [])

  const handleRemoveCustomer = id => {
    axios.delete(`https://reqres.in/api/users/${id}`)
      .then(response => {
        const newCustomerState = customers.filter(customer => customer.id !== id)
        setCustomer(newCustomerState)
      })
  }

  const handleEditCustomer = id => {
    history.push(`/customers/edit/${id}`)
  }

  return(
    <Grid container>
      {
        customers.map(customer => (
          <Grid item xs={12} sm={6} md={4}>
            <CustomerCard 
              id={customer.id}
              name={customer.first_name}
              lastname={customer.last_name}
              email={customer.email}
              avatar={customer.avatar}
              className={classes.card}
              onRevomeCustomer={handleRemoveCustomer}
              onEditCustomer={handleEditCustomer}
            />
          </Grid>
          ))
        }
    </Grid>
  )
}

export default List