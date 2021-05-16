import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { createProfile, getCurrentProfile } from '../../actions/profile'
import { withRouter } from 'react-router-dom'

const EditProfile = ({
  profile: { profile, loading },
  createProfile,
  getCurrentProfile,
  history
}) => {
  const [formData, setFormData] = useState({
    company: '',
    website: '',
    location: '',
    status: '',
    skills: '',
    githubusername: '',
    bio: '',
    twitter: '',
    facebook: '',
    linkedin: '',
    youtube: '',
    instagram: ''
  })

  const {
    company,
    website,
    location,
    status,
    skills,
    githubusername,
    bio,
    twitter,
    facebook,
    linkedin,
    youtube,
    instagram
  } = formData

  const [displaySocialInputs, toggleSocialInputs] = useState(false)

  useEffect(() => {
    getCurrentProfile()

    setFormData({
      company: loading || !profile.company ? '' : profile.company,
      website: loading || !profile.website ? '' : profile.website,
      location: loading || !profile.location ? '' : profile.location,
      status: loading || !profile.status ? '' : profile.status,
      skills: loading || !profile.skills ? '' : profile.skills.join(','),
      githubusername:
        loading || !profile.githubusername ? '' : profile.githubusername,
      bio: loading || !profile.bio ? '' : profile.bio,
      twitter: loading || !profile.social.twitter ? '' : profile.social.twitter,
      facebook:
        loading || !profile.social.facebook ? '' : profile.social.facebook,
      linkedin:
        loading || !profile.social.linkedin ? '' : profile.social.linkedin,
      youtube: loading || !profile.social.youtube ? '' : profile.social.youtube,
      instagram:
        loading || !profile.social.instagram ? '' : profile.social.instagram
    }) // eslint-disable-next-line
  }, [loading])

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value })

  const onSubmit = (e) => {
    e.preventDefault()
    createProfile(formData, history, true)
  }

  return (
    <div className='mx-auto lg:w-10/12'>
      <h1 className='h1 mt-6'>Create Your Profile</h1>
      <h2 className='h2'>
        <i className='fas fa-user'></i> Let's get some information to make your
        profile stand out
      </h2>
      <p className='form-text'>* = required field</p>
      <form className='mb-8' onSubmit={(e) => onSubmit(e)}>
        <div className='form-group w-full'>
          <select
            value={status}
            onChange={(e) => onChange(e)}
            className='mt-2 mb-2'
            name='status'
            id='status'
          >
            <option value='0'>* Select Professional Status</option>
            <option value='Developer'>Developer</option>
            <option value='Junior Developer'>Junior Developer</option>
            <option value='Senior Developer'>Senior Developer</option>
            <option value='Manager'>Manager</option>
            <option value='Student or Learning'>Student or Learning</option>
            <option value='Instructor'>Instructor</option>
            <option value='Intern'>Intern</option>
            <option value='Other'>Other</option>
          </select>
          <p className='form-text'>
            Give us an idea of where you are at in your career
          </p>
        </div>
        <div className='form-group'>
          <input
            className='input'
            type='text'
            placeholder='Company'
            name='company'
            value={company}
            onChange={(e) => onChange(e)}
          />
          <p className='form-text'>
            Could be your own company or one you work for
          </p>
        </div>
        <div className='form-group'>
          <input
            className='input'
            type='text'
            placeholder='Website'
            name='website'
            value={website}
            onChange={(e) => onChange(e)}
          />
          <p className='form-text'>Could be your own or a company website</p>
        </div>
        <div className='form-group'>
          <input
            className='input'
            type='text'
            placeholder='Location'
            name='location'
            value={location}
            onChange={(e) => onChange(e)}
          />
          <p className='form-text'>City & state suggested (eg. Toronto, ON)</p>
        </div>
        <div className='form-group'>
          <input
            className='input'
            type='text'
            placeholder='* Skills'
            name='skills'
            value={skills}
            onChange={(e) => onChange(e)}
          />
          <p className='form-text'>
            Please use comma separated values (eg. HTML, CSS, JavaScript, PHP)
          </p>
        </div>
        <div className='form-group'>
          <input
            className='input'
            type='text'
            placeholder='GitHub Username'
            name='githubusername'
            value={githubusername}
            onChange={(e) => onChange(e)}
          />
          <p className='form-text mb-6'>
            If you want your latest repos and a GitHub link, include your
            username
          </p>
        </div>
        <div className='form-group'>
          <textarea
            className='textarea'
            name='bio'
            id='bio'
            cols='30'
            rows='10'
            placeholder='A short bio of yourself'
            value={bio}
            onChange={(e) => onChange(e)}
          ></textarea>
          <p className='form-text'>Tell us a little about yourself</p>
        </div>
        <div className='form-group mt-6 mb-6'>
          <button
            onClick={() => toggleSocialInputs(!displaySocialInputs)}
            type='button'
            className='btn btn-white mr-2'
          >
            Add Social Network Links
          </button>
          <span>Optional</span>
        </div>

        {displaySocialInputs && (
          <>
            <div className='mb-4'>
              <i className='fab fa-twitter fa-2x'></i>
              <input
                className='input ml-4 w-10/12'
                type='text'
                placeholder='Twitter URL'
                name='twitter'
                value={twitter}
                onChange={(e) => onChange(e)}
              />
            </div>
            <div className='mb-4'>
              <i className='fab fa-facebook fa-2x'></i>
              <input
                className='input ml-4 w-10/12'
                type='text'
                placeholder='Facebook URL'
                name='facebook'
                value={facebook}
                onChange={(e) => onChange(e)}
              />
            </div>
            <div className='mb-4'>
              <i className='fab fa-youtube fa-2x'></i>
              <input
                className='input ml-4 w-10/12'
                type='text'
                placeholder='YouTube URL'
                name='youtube'
                value={youtube}
                onChange={(e) => onChange(e)}
              />
            </div>
            <div className='mb-4'>
              <i className='fab fa-linkedin fa-2x'></i>
              <input
                className='input ml-4 w-10/12'
                type='text'
                placeholder='Linkedin URL'
                name='linkedin'
                value={linkedin}
                onChange={(e) => onChange(e)}
              />
            </div>
            <div className='mb-6'>
              <i className='fab fa-instagram fa-2x'></i>
              <input
                className='input ml-4 w-10/12'
                type='text'
                placeholder='Instagram URL'
                name='instagram'
                value={instagram}
                onChange={(e) => onChange(e)}
              />
            </div>
          </>
        )}

        <input type='submit' className='btn mr-2' />
        <a href='/dashboard' className='btn btn-white'>
          Go Back
        </a>
      </form>
    </div>
  )
}

EditProfile.propTypes = {
  createProfile: PropTypes.func.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  profile: state.profile
})

export default connect(mapStateToProps, { createProfile, getCurrentProfile })(
  withRouter(EditProfile)
)
