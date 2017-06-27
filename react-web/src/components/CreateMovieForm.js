import React from 'react'
import Field from './Field'

function handleSubmit(event, onCreate) {
  event.preventDefault()
  const form = event.target
  const title = form.elements['title'].value
  const year = form.elements['year'].value

  onCreate({ title, year });
}

export default function CreateMovieForm({
  onCreate
}) {
  return(
    <form onSubmit={ (event) => handleSubmit(event, onCreate) }>
      <Field label="Title" name="title" />
      <Field label="Year" name="year" />
      <button type="submit">Create Movie</button>
    </form>
  )
}
