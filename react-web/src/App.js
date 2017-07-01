import React, { Component } from 'react';
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
      <div className="App">
      <RegistrationForm onRegistration={ this.handleRegistration } />
      {
        !!token ? (
          'Welcome'
        ) : (
          <SignInForm onSignIn={ this.handleSignIn } />
        )
      }
      { !!error && <p>{ error.message }</p> }
      <CreateMovieForm onCreate={ this.handleCreateMovie } />
        {
          !!movies ? (
            < MoviesList items={ movies } />
          ) : (
            'Loading movies…'
          )
        }
      </div>
    );
  }

  componentDidMount() {
    fetch('/api/movies')
      .then(res => res.json())
      .then(movies => {
        this.setState({ movies })
      })
      .catch(error => {
        this.setState({ error })
      })
  }
}

export default App
