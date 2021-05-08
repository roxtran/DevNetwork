import React from 'react'
import { Link } from 'react-router-dom'

const Landing = () => {
  return (
    <section className='w-screen h-screen bg-hero-bg-img absolute top-0 left-0 z-0 flex flex-col justify-center items-center'>
      <div>
        <div className='text-center text-white'>
          <h1 className='h1 text-5xl'>Developer Social</h1>
          <p className='mb-5'>
            Where developers can create profile/portfolio, share posts and get
            help from each other.
          </p>
          <div>
            <Link className='btn mx-2' to='/register'>
              Sign Up
            </Link>
            <Link className='btn btn-white mx-2' to='/login'>
              Login
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Landing
