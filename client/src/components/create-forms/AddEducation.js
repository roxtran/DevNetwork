import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { addEducation } from '../../actions/profile'
import { withRouter } from 'react-router-dom'

const AddEducation = ({ addEducation, history }) => {
  const [formData, setFormData] = useState({
    school: '',
    degree: '',
    fieldofstudy: '',
    from: '',
    to: '',
    current: false,
    description: ''
  })

  const [toDateDisabled, toggleDisabled] = useState(false)

  const { school, degree, fieldofstudy, from, to, current, description } =
    formData

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value })

  const onSubmit = (e) => {
    e.preventDefault()
    addEducation(formData, history)
  }

  return (
    <div className='mx-auto lg:w-10/12 pt-6 pb-6'>
      <h1 className='h1'>Add Education</h1>
      <h2 className='h2'>
        <i className='fas fa-code-branch'></i> Add any School or Bootcamp that
        you have attended.
      </h2>
      <p className='form-text'>* = required field</p>
      <form className='mb-8' onSubmit={(e) => onSubmit(e)}>
        <div className='form-group'>
          <input
            className='input'
            type='text'
            placeholder='* School or Bootcamp'
            name='school'
            value={school}
            onChange={(e) => onChange(e)}
            required
          />
        </div>
        <div className='form-group'>
          <input
            className='input'
            type='text'
            placeholder='* Degree or Certificate'
            name='degree'
            value={degree}
            onChange={(e) => onChange(e)}
            required
          />
        </div>
        <div className='form-group'>
          <input
            className='input'
            type='text'
            placeholder='Field of Study'
            name='fieldofstudy'
            value={fieldofstudy}
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
            Current School
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
            placeholder='Program Description'
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

AddEducation.propTypes = {
  addEducation: PropTypes.func.isRequired
}

export default connect(null, { addEducation })(withRouter(AddEducation))
