import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Moment from 'react-moment'
import { deleteExperience } from '../../actions/profile'

const Experience = ({ experience, deleteExperience }) => {
  const experiences = experience.map((exp) => (
    <tr key={exp._id}>
      <td>{exp.company}</td>
      <td>{exp.title}</td>
      <td>
        <Moment format='YYYY/MM/DD'>{exp.from}</Moment> -{' '}
        {exp.to === null ? (
          ' Now'
        ) : (
          <Moment format='YYYY/MM/DD'>{exp.to}</Moment>
        )}
      </td>
      <td className='w-48'>
        <div className='w-32 mx-auto'>
          <button
            onClick={() => deleteExperience(exp._id)}
            className='btn btn-red my-1 py-1'
          >
            Delete
          </button>
        </div>
      </td>
    </tr>
  ))

  return (
    <div className='pt-6'>
      <h2 className='h2 mb-4'>Experience Credentials</h2>
      <table className='table w-full'>
        <thead className='thead bg-purple-500 text-white'>
          <tr>
            <th className='th'>Company</th>
            <th className='th'>Title</th>
            <th className='th'>Years</th>
            <th className='th'></th>
          </tr>
        </thead>
        <tbody>{experiences}</tbody>
      </table>
    </div>
  )
}

Experience.propTypes = {
  experience: PropTypes.array.isRequired,
  deleteExperience: PropTypes.func.isRequired
}

export default connect(null, { deleteExperience })(Experience)
