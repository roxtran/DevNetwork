import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { addExperience } from '../../actions/profile'
import { withRouter } from 'react-router-dom'

const AddExperience = ({ addExperience, history }) => {
  const [formData, setFormData] = useState({
    company: '',
    title: '',
    location: '',
    from: '',
    to: '',
    current: false,
    description: ''
  })

  const [toDateDisabled, toggleDisabled] = useState(false)

  const { company, title, location, from, to, current, description } = formData

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value })

  const onSubmit = (e) => {
    e.preventDefault()
    addExperience(formData, history)
  }

  return (
    <div className='mx-auto lg:w-10/12 pt-6 pb-6'>
      <h1 className='h1'>Add Experience</h1>
      <h2 className='h2'>
        <i className='fas fa-code-branch'></i> Add any developer/programming
        positions that you have had in the past.
      </h2>
      <p className='form-text'>* = required field</p>
      <form className='mb-8' onSubmit={(e) => onSubmit(e)}>
        <div className='form-group'>
          <input
            className='input'
            type='text'
            placeholder='* Job Title'
            name='title'
            value={title}
            onChange={(e) => onChange(e)}
            required
          />
        </div>
        <div className='form-group'>
          <input
            className='input'
            type='text'
            placeholder='* Company'
            name='company'
            value={company}
            onChange={(e) => onChange(e)}
            required
          />
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
        </div>
        <div className='form-group'>
          <h4 className='font-bold'>From Date</h4>
          <input
            className='input'
            type='date'
            name='from'
            value={from}
            onChange={(e) => onChange(e)}
          />
        </div>
        <div className='form-group'>
          <p>
            <input
              type='checkbox'
              name='current'
              checked={current}
              value={current}
              onChange={(e) => {
                setFormData({ ...formData, current: !current })
                toggleDisabled(!toDateDisabled)
              }}
            />{' '}
            Current Job
          </p>
        </div>
        <div className='form-group'>
          <h4 className='font-bold'>To Date</h4>
          <input
            className='input'
            type='date'
            name='to'
            value={to}
            onChange={(e) => onChange(e)}
            disabled={toDateDisabled ? 'disabled' : ''}
          />
        </div>
        <div className='form-group'>
          <textarea
            className='textarea'
            name='description'
            id='description'
            cols='30'
            rows='10'
            placeholder='Job Description'
            value={description}
            onChange={(e) => onChange(e)}
          ></textarea>
        </div>
        <input type='submit' className='btn mr-2' />
        <a href='/dashboard' className='btn btn-white'>
          Go Back
        </a>
      </form>
    </div>
  )
}

AddExperience.propTypes = {
  addExperience: PropTypes.func.isRequired
}

export default connect(null, { addExperience })(withRouter(AddExperience))
