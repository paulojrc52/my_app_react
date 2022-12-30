import React from 'react'
import { Switch, Route} from 'react-router-dom'
import Customers from '../pages/Customers'

import Home from '../pages/Home'

const Routes = () => {
  return(
    <Switch>
      <Route path="/customers">
        <Customers />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  )
}

export default Routes