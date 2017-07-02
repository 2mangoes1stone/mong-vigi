import axiosapi from './init'


// index
export function list () {
  return axiosapi.get('/api/movies')
    .then(res => res.data)
}

export function createMovie({ title, year }) {
  return axiosapi.post('/api/movies', {
      title,
      year
  })
  .then(res => res.data)
}