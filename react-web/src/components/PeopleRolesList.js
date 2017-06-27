import React from 'react'
import PersonRole from './PersonRole'

export default function PeopleRolesList({
  items
}) {
  return (
    <div>
      {
        items.map((item) => (
          <PersonRole 
            key={ item._id }
            { ...item }
          />
        ))
      }
    </div>
  )
}
