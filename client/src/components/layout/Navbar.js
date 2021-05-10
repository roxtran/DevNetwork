import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='navbar'>
      <h1 className='text-xl font-bold'>
        <a href='/'>
          <i className='fas fa-code'> DevNetwork</i>
        </a>
      </h1>
      <ul className='flex '>
        <li className='mr-4 hover:text-gray-200'>
          <Link to='/profiles'>Developers</Link>
        </li>
        <li className='mr-4 hover:text-gray-200'>
          <Link to='/register'>Register</Link>
        </li>
        <li className='hover:text-gray-200'>
          <Link to='/login'>Login</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
