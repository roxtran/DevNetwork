import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Spinner from '../layout/Spinner'
import DashboardActions from './DashboardActions'
import { getCurrentProfile, deleteAccount } from '../../actions/profile'
import Experience from './Experience'
import Education from './Education'

const Dashboard = ({
  getCurrentProfile,
  deleteAccount,
  auth: { user },
  profile: { profile, loading }
}) => {
  useEffect(() => {
    getCurrentProfile()
  }, [getCurrentProfile])

  return loading && profile === null ? (
    <Spinner />
  ) : (
    <div className='mx-auto lg:w-10/12'>
      <h1 className='h1 mt-4'>Dashboard</h1>
      <h2 className='h2'>
        <i className='fas fa-user'></i> Welcome {user && user.name}
      </h2>
      {profile !== null ? (
        <>
          <DashboardActions />
          <Experience experience={profile.experience} />
          <Education education={profile.education} />

          <div className='btn-wrapper my-6'>
            <button onClick={() => deleteAccount()} className='btn btn-red'>
              <i className='fas fa-user-minus'></i> Delete My Account
            </button>
          </div>
        </>
      ) : (
        <>
          <p className='mb-6'>
            You have not setup a profile, please add some info.
          </p>
          <Link className='btn' to='/create-profile'>
            Create Profile
          </Link>
        </>
      )}
    </div>
  )
}

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  deleteAccount: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile
})

export default connect(mapStateToProps, { getCurrentProfile, deleteAccount })(
  Dashboard
)
