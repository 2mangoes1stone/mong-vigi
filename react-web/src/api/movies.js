import axios from 'axios'

export function createMovie({ title, year }) {
  return axios.post('/api/movies', {
      title,
      year
  })
  .then(res => res.data)
}