import React from 'react'
import { Switch, Route} from 'react-router-dom'

import TemplatePage from '../templates/Page'

import CustomersList from '../pages/customers/List'
import CustomersRegister from '../pages/customers/Register'
import Home from '../pages/Home'

const Routes = () => {
  return(
    <Switch>
        <Route path="/customers/add">
        <TemplatePage title='Cadastro de Cliente' Component={CustomersRegister} />
      </Route>
      <Route path="/customers">
        <TemplatePage title='Lista de Clientes' Component={CustomersList} />
      </Route>
      <Route path="/">
        <TemplatePage title='Página Inicial' Component={Home} />
      </Route>
    </Switch>
  )
}

export default Routes