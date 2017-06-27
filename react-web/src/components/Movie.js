import React from 'react'
import PeopleRolesList from './PeopleRolesList'

export default function Movie({
  title,
  year,
  cast,
  directors
}) {
  return (
    <div>
      {
        <h2>{ title } <small>({ year })</small></h2>
      }
      <h3>Cast</h3>
      <PeopleRolesList items={ cast } />
      <h3>Directors</h3>
      <PeopleRolesList items={ directors } />
    </div>
  )
}
