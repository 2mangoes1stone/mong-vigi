import React from 'react'

export default function PersonRole({
  person,
  role
}) {
  return (
    <div>
      { person.firstname } { person.lastname }
      { ' — ' }
      { role }
    </div>
  )
}
