import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Landing from './components/layout/Landing'
import Navbar from './components/layout/Navbar'
import Register from './components/auth/Register'
import Login from './components/auth/Login'

function App() {
  return (
    <Router>
      <Navbar />
      <Route exact path='/' component={Landing} />
      <section
        // className='container mx-auto'
      >
        <Switch>
          <Route exact path='/register' component={Register} />
          <Route exact path='/login' component={Login} />
        </Switch>
      </section>
    </Router>
  )
}

export default App
