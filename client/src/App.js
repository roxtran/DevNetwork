import { useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// Components
import Landing from './components/layout/Landing'
import Navbar from './components/layout/Navbar'
import Register from './components/auth/Register'
import Login from './components/auth/Login'
import Alert from './components/layout/Alert'
// Redux
import { Provider } from 'react-redux'
import store from './store'
import setAuthToken from './utils/setAuthToken'
import { loadUser } from './actions/auth'
// styles
import './App.css'
import Dashboard from './components/dashboard/Dashboard'
import PrivateRoute from './components/routing/PrivateRoute'
import CreateProfile from './components/create-forms/CreateProfile'
import EditProfile from './components/create-forms/EditProfile'
import AddExperience from './components/create-forms/AddExperience'
import AddEducation from './components/create-forms/AddEducation'

if (localStorage.token) {
  setAuthToken(localStorage.token)
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser())
  }, [])

  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Route exact path='/' component={Landing} />
        <section className='container'>
          <Alert />
          <Switch>
            <Route exact path='/register' component={Register} />
            <Route exact path='/login' component={Login} />
            <PrivateRoute exact path='/dashboard' component={Dashboard} />
            <PrivateRoute
              exact
              path='/create-profile'
              component={CreateProfile}
            />
            <PrivateRoute exact path='/edit-profile' component={EditProfile} />
            <PrivateRoute
              exact
              path='/add-experience'
              component={AddExperience}
            />
            <PrivateRoute
              exact
              path='/add-education'
              component={AddEducation}
            />
          </Switch>
        </section>
      </Router>
    </Provider>
  )
}

export default App
