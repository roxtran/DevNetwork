import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Link, Redirect } from 'react-router-dom'
import { setAlert } from '../../actions/alert'
import { register } from '../../actions/auth'
import PropTypes from 'prop-types'

const Register = ({ setAlert, register, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: ''
  })

  const { name, email, password, password2 } = formData

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value })

  const onSubmit = async (e) => {
    e.preventDefault()
    if (password !== password2) {
      setAlert('Passwords do not match!', 'danger')
    } else {
      register({ name, email, password })
    }
  }

  // Redirect if logged in
  if (isAuthenticated) {
    return <Redirect to='/dashboard' />
  }

  return (
    <div className='h-screen sm:p-12 flex flex-col items-center'>
      <div className='mx-auto w-96 max-w-md px-8 py-10 bg-white border-0 shadow-lg rounded-2xl'>
        <h1 className='h1'>Sign Up</h1>
        <h2 className='h2'>Create Your Account</h2>
        <form onSubmit={(e) => onSubmit(e)}>
          <div className='w-full mb-2'>
            <input
              type='text'
              placeholder='Name'
              name='name'
              // required
              className='input'
              value={name}
              onChange={(e) => onChange(e)}
            />
          </div>
          <div className='w-full mb-2'>
            <input
              type='email'
              placeholder='Email'
              name='email'
              // required
              className='input'
              value={email}
              onChange={(e) => onChange(e)}
            />
            <br />
            <small>
              This site uses Gravatar so if you want a profile image, use a
              Gravatar email.
            </small>
          </div>
          <div className='w-full mb-6'>
            <input
              type='password'
              placeholder='Password'
              name='password'
              minLength='6'
              className='input'
              // required
              value={password}
              onChange={(e) => onChange(e)}
            />
          </div>
          <div className='w-full mb-6'>
            <input
              type='password'
              placeholder='Confirm Password'
              name='password2'
              minLength='6'
              className='input'
              // required
              value={password2}
              onChange={(e) => onChange(e)}
            />
          </div>
          <input className='btn' type='submit' value='Register' />
        </form>
      </div>
      <p className='mt-4'>
        Already have an account?{' '}
        <Link to='/login' className='text-purple-700'>
          Sign In
        </Link>
      </p>
    </div>
  )
}

Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, { setAlert, register })(Register)
