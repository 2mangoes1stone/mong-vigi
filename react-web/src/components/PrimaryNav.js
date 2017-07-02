import React from 'react'
import { NavLink } from 'react-router-dom'

export default () => (
  <nav>
    <NavLink exact to='/' activeClassName='actve'>Home</NavLink>
    <NavLink to='/register' activeClassName='actve'>Register</NavLink>
    <NavLink to='/signin' activeClassName='actve'>Sign In</NavLink>
    <NavLink to='/movies' activeClassName='actve'>Movies</NavLink>
  </nav>
)