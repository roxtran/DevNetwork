import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: ''
  })

  const { name, email, password, password2 } = formData

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value })

  const onSubmit = (e) => {
    e.preventDefault()
    if (password !== password2) {
      console.log('Passwords do not match!')
    } else {
      console.log(formData)
    }
  }

  return (
    <div className='h-screen bg-gray-100 sm:p-12 flex flex-col items-center'>
      <div className='mx-auto max-w-md px-8 py-10 bg-white border-0 shadow-lg sm:rounded-2xl'>
        <h1 className='h1'>Sign Up</h1>
        <h2 className='h2'>Create Your Account</h2>
        <form onSubmit={(e) => onSubmit(e)}>
          <div className='w-full mb-2'>
            <input
              type='text'
              placeholder='Name'
              name='name'
              required
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
              required
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
              required
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
              required
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

export default Register
