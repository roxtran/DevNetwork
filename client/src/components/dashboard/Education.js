import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Moment from 'react-moment'
import { deleteEducation } from '../../actions/profile'

const Education = ({ education, deleteEducation }) => {
  const educations = education.map((edu) => (
    <tr key={edu._id}>
      <td>{edu.school}</td>
      <td>{edu.degree}</td>
      <td>
        <Moment format='YYYY/MM/DD'>{edu.from}</Moment> -{' '}
        {edu.to === null ? (
          ' Now'
        ) : (
          <Moment format='YYYY/MM/DD'>{edu.to}</Moment>
        )}
      </td>
      <td className='w-48'>
        <div className='w-32 mx-auto'>
          <button
            onClick={() => deleteEducation(edu._id)}
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
      <h2 className='h2 mb-4'>Education Credentials</h2>
      <table className='table w-full'>
        <thead className='thead bg-purple-500 text-white'>
          <tr>
            <th className='th'>School</th>
            <th className='th'>Degree</th>
            <th className='th'>Years</th>
            <th className='th'></th>
          </tr>
        </thead>
        <tbody>{educations}</tbody>
      </table>
    </div>
  )
}

Education.propTypes = {
  education: PropTypes.array.isRequired,
  deleteEducation: PropTypes.func.isRequired
}

export default connect(null, { deleteEducation })(Education)
