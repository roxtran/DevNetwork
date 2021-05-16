import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const ProfileItem = ({
  profile: {
    user: { _id, name, avatar },
    status,
    company,
    location,
    skills
  }
}) => {
  return (
    <div className='p-8 flex flex-row bg-gray-200 rounded justify-items-center items-start mt-6'>
      <img src={avatar} alt='' className='rounded-full' />
      <div className='wrapper flex-1 mx-8 mt-4'>
        <h2 className='h2'>{name}</h2>
        <p className='cl'>
          {status} {company && <span> at {company}</span>}
        </p>
        <div className='mb-6'>{location && <span>{location}</span>}</div>
        <Link to={`/profile/${_id}`} className='btn'>
          View Profile
        </Link>
      </div>
      <ul className='mt-4 mr-6'>
        {skills.slice(0, 4).map((skill, index) => (
          <li key={index}>
            <i className='fas fa-check'></i> {skill}
          </li>
        ))}
      </ul>
    </div>
  )
}

ProfileItem.propTypes = {
  profile: PropTypes.object.isRequired
}

export default ProfileItem
