import React from 'react'
import { Switch, Route} from 'react-router-dom'

import TemplatePage from '../templates/Page'

import Customers from '../pages/Customers'
import Home from '../pages/Home'

const Routes = () => {
  return(
    <Switch>
      <Route path="/customers">
        <TemplatePage title='Lista de Clientes' Component={Customers} />
      </Route>
      <Route path="/">
        <TemplatePage title='Página Inicial' Component={Home} />
      </Route>
    </Switch>
  )
}

export default Routes