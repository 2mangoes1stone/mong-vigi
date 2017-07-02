import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import MoviesList from './components/MoviesList'
import './App.css';
import CreateMovieForm from './components/CreateMovieForm'
import SignInForm from './components/SignInForm'
import RegistrationForm from './components/Registrationform'
import * as authAPI from './api/auth'
import * as moviesAPI from './api/movies'

class App extends Component {
  state = {
    error: null,
    token: null,
    movies: null
  }

  handleRegistration = ({email, password}) => {
    authAPI.register({email, password})
    .then(json => {
      this.setState({ token: json.token })
    })
    .catch(error => {
      this.setState({ error })
    })
  }

  handleSignIn = ({email, password}) => {
    authAPI.signIn({email, password})
    .then(json => {
      this.setState({ token: json.token })
    })
    .catch(error => {
      this.setState({ error })
    })
  }

  handleCreateMovie = ({ title, year }) => {
    moviesAPI.createMovie({title, year})
    .then(newMovie => {
      this.setState((prevState) => {
        return {
          movies: prevState.movies.concat(newMovie)
        }
      })
    })
    .catch(error => {
      this.setState({ error })
    })
  }

  render() {
    const { error, token, movies } = this.state
    return (
      <Router>
        <div className="App">
          <nav>
            <Link to='/'>Home</Link>
            <Link to='/register'>Register</Link>
            <Link to='/signin'>Sign In</Link>
            <Link to='/movies'>Movies</Link>
          </nav>

          { !!error && <p>{ error.message }</p> }

          <Route exact path='/' render={
            () => (
              <h1>Home</h1>
            )
          } />

          <Route exact path='/register' render={
            () => (
              <div>
                {
                  !!token ? (
                    'Welcome'
                  ) : (
                    <div>
                      <RegistrationForm onRegistration={ this.handleRegistration } />
                    </div>
                  )
                }
              </div>
            )
          } />

          <Route exact path='/signin' render={
            () => (
              <div>
                {
                  !!token ? (
                    'Welcome'
                  ) : (
                    <div>
                      <SignInForm onSignIn={ this.handleSignIn } />
                    </div>
                  )
                }
              </div>
            )
          } />

          <Route exact path='/movies' render={
            () => (
              <div>
              <CreateMovieForm onCreate={ this.handleCreateMovie } />
              {
                !!movies ? (
                  <MoviesList items={ movies } />
                ) : (
                  'Loading movies…'
                )
              }  
              </div>
            )
          } />
        
        </div>
      </Router>
    );
  }

  componentDidMount() {
    moviesAPI.list()
      .then(movies => {
        this.setState({ movies })
      })
      .catch(error => {
        this.setState({ error })
      })
  }
}

export default App
