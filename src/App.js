import { BrowserRouter as Router, } from 'react-router-dom'

import Routes from './routes/Routes'
import TemplateDefault from './templates/Default'

const App = () => {
  return (
    <Router>
      <TemplateDefault>
        <Routes />
      </TemplateDefault>
    </Router> 
  )
}

export default App
