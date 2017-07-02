import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import './App.css';
import HomePage from './pages/HomePage'
import MoviesPage from './pages/MoviesPage'
import RegistrationPage from './pages/RegistrationPage'
import SigninPage from './pages/SigninPage'
import CreateMovieForm from './components/CreateMovieForm'
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
        <main>
          <nav>
            <Link to='/'>Home</Link>
            <Link to='/register'>Register</Link>
            <Link to='/signin'>Sign In</Link>
            <Link to='/movies'>Movies</Link>
          </nav>

          { !!error && <p>{ error.message }</p> }

          <Switch>
            <Route exact path='/' component={ HomePage }/>

            <Route exact path='/register' render={
              () => (
                <RegistrationPage onRegistration={ this.handleRegistration } token={ token } />
              )
            } />

            <Route exact path='/signin' render={
              () => (
                <SigninPage onSignin={ this.handleSignIn } token={ token } />
              )
            } />

            <Route exact path='/movies' render={
              () => (
                <div>
                  <CreateMovieForm onCreate={ this.handleCreateMovie } />
                  <MoviesPage movies={ movies } />
                </div>
              )
            } />

            <Route render={({ location }) => <p>{ location.pathname } not found</p>} />
          </Switch>
        
        </main>
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
