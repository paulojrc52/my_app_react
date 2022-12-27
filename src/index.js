import React from 'react'
import ReactDOM from 'react-dom/client'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'

import App from './App'

import { deepPurple, red } from '@material-ui/core/colors'

import { 
  BrowserRouter  as Router,
} from 'react-router-dom'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: deepPurple[900],
    },
    secondary: {
      main: red[900],
    }
  }
})


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Router>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </Router>
)


