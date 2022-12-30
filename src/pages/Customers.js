import { useState, useEffect } from "react"
import axios from 'axios'

import CustomerCard from "../components/CustomerCard"

const Customers = () => {
    const [customers, setCustomer] = useState([])

    useEffect(() => {
      axios.get('https://reqres.in/api/users')
        .then(response => {
          const { data } = response.data
          setCustomer(data)
      })
    }, [])

    return(
        <>
          <h1>Clientes</h1>
          {
            customers.map(customer => (
              <CustomerCard 
                name={customer.first_name}
                lastname={customer.last_name}
                email={customer.email}
                avatar={customer.avatar}
              />
            ))
          }
        </>
    )
}

export default Customers