import React from 'react'
import { Link } from 'react-router-dom'
import PeopleRolesList from './PeopleRolesList'

export default function Movie({
  _id,
  title,
  year,
  cast,
  directors
}) {
  return (
    <div>
      {
        <h2> 
        <Link to={ `/movies/${_id}` }>
          { title }
        </Link>
        { ' ' }
        <small>({ year })</small></h2>
      }
      <h3>Cast</h3>
      <PeopleRolesList items={ cast } />
      <h3>Directors</h3>
      <PeopleRolesList items={ directors } />
    </div>
  )
}
