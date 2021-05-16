import React from 'react'
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

const Landing = ({ isAuthenticated }) => {
  if (isAuthenticated) {
    return <Redirect to='/dashboard' />
  }
  return (
    <section className='w-screen h-screen bg-hero-bg-img bg-no-repeat bg-cover absolute top-0 left-0 z-0 flex flex-col justify-center items-center'>
      <div>
        <div className='text-center text-white'>
          <h1 className='h1 text-5xl'>Developer Network</h1>
          <p className='mb-8 px-2'>
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

Landing.propTypes = {
  isAuthenticated: PropTypes.bool
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps)(Landing)
