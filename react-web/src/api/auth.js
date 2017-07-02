import axiosapi from './init'

export function signIn({ email, password }) {
  return axiosapi.post('/auth', {
      email,
      password
  })
  .then(res => res.data)
}

export function register({ email, password }) {
  return axiosapi.post('/auth/register', {
      email,
      password
  })
  .then(res => res.data)
}