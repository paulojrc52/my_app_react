import React from 'react'

import {
  Switch, 
  Route, 
} from 'react-router-dom'

import TemplateDefault from '../templates/Default'
import TemplatePage from '../templates/Page'
import TemplateClean from '../templates/Clean'

import CustomersEdit from '../pages/customers/Edit'
import CustomersRegister from '../pages/customers/Register'
import CustomersList from '../pages/customers/List'
import Home from '../pages/Home'
import Login from '../pages/Login'

const Routes = () => {
    return(
        <Switch>
          <Route path="/login">
            <TemplateClean title="Acesso Restrito" Component={Login} />
          </Route>
        
          <TemplateDefault>
            <Route path="/customers/edit/:id">
              <TemplatePage title="Editar Cliente" Component={CustomersEdit} />
            </Route>
            <Route path="/customers/add">
              <TemplatePage title="Cadatro de Clientes" Component={CustomersRegister} />
            </Route>
            <Route path="/customers">
              <TemplatePage title="Clientes" Component={CustomersList} />
            </Route>
            <Route path="/">
              <TemplatePage title="Página Inicial" Component={Home} />
            </Route>
          </TemplateDefault>
        </Switch>
    )
}

export default Routes