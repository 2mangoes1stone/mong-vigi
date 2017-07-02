import React from 'react'
import { Switch, Route } from 'react-router-dom'
import MoviesList from '../components/MoviesList'
import Movie from '../components/Movie'

const MoviesPage = ({
  movies
}) => (
  <div>
    {
      !!movies ? (
        <Switch>
          <Route path='/movies/:id' render={
            ({ match }) => {
              const id = match.params.id
              const movie = movies.find((movie) => movie._id === id)
              if (!movie) {
                return (
                  <p>Movie with id "{ id }"</p>
                )
              }
              return (
                <Movie { ...movie } />
              )
            } 
          } />
          <Route path='/movies' render={
            () => (
              <MoviesList items={ movies } />
            ) 
          } />
        </Switch>
      ) : (
        'Loading movies…'
      )
    }  
    </div>
  )

export default MoviesPage