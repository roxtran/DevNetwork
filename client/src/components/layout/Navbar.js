import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { logout } from '../../actions/auth'

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
  const authLinks = (
    <ul className='flex '>
      <li className='mr-4 hover:text-gray-200'>
        <Link to='/profiles'>
          <span className='hide-sm'>Developers</span>
        </Link>
      </li>
      <li className='mr-4 hover:text-gray-200'>
        <Link to='/dashboard'>
          <i className='fas fa-user'></i>{' '}
          <span className='hide-sm'>Dashboard</span>
        </Link>
      </li>
      <li className='mr-4 hover:text-gray-200'>
        <a onClick={logout} href='#!'>
          <i className='fas fa-sign-out-alt'></i>{' '}
          <span className='hide-sm'>Logout</span>
        </a>
      </li>
    </ul>
  )

  const guestLinks = (
    <ul className='flex '>
      <li className='mr-4 hover:text-gray-200'>
        <Link to='/profiles'>
          <span className='hide-sm'>Developers</span>
        </Link>
      </li>
      <li className='mr-4 hover:text-gray-200'>
        <Link to='/register'>Register</Link>
      </li>
      <li className='hover:text-gray-200'>
        <Link to='/login'>Login</Link>
      </li>
    </ul>
  )

  return (
    <nav className='navbar'>
      <h1 className='text-xl font-bold'>
        <a href='/'>
          <i className='fas fa-code'></i> DevNetwork
        </a>
      </h1>
      {!loading && <>{isAuthenticated ? authLinks : guestLinks}</>}
    </nav>
  )
}

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  auth: state.auth
})

export default connect(mapStateToProps, { logout })(Navbar)
