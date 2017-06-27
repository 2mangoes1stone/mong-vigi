import React from 'react'

export default function Field({
  label,
  name
}) {
  return(
    <label>
      { label + ' ' }
      <input name={ name }/>
    </label>
  )
}