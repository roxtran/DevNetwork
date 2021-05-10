import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { login } from '../../actions/auth'

const Login = ({ login }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const { email, password } = formData

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value })

  const onSubmit = async (e) => {
    e.preventDefault()
    login(email, password)
  }

  return (
    <div className='h-screen bg-gray-100 sm:p-12 flex flex-col items-center'>
      <div className='mx-auto w-96 max-w-md px-8 py-10 bg-white border-0 shadow-lg rounded-2xl'>
        <h1 className='h1'>Login</h1>
        <h2 className='h2'>Sig Into Your Account</h2>
        <form onSubmit={(e) => onSubmit(e)}>
          <div className='w-full mb-2'>
            <input
              type='email'
              placeholder='Email'
              name='email'
              required
              className='input'
              value={email}
              onChange={(e) => onChange(e)}
            />
            <br />
          </div>
          <div className='w-full mb-6'>
            <input
              type='password'
              placeholder='Password'
              name='password'
              minLength='6'
              className='input'
              required
              value={password}
              onChange={(e) => onChange(e)}
            />
          </div>

          <input className='btn' type='submit' value='Login' />
        </form>
      </div>
      <p className='mt-4'>
        Don't have an account?{' '}
        <Link to='/register' className='text-purple-700'>
          Register
        </Link>
      </p>
    </div>
  )
}

Login.propTypes = {
  login: PropTypes.func.isRequired
}

export default connect(null, { login })(Login)
