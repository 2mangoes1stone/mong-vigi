import React, { Component } from 'react';
import MoviesList from './components/MoviesList'
import './App.css';
import CreateMovieForm from './components/CreateMovieForm'

class App extends Component {
  state = {
    error: null,
    movies: null
  }

  handleCreateMovie = ({ title, year }) => {
    fetch('/api/movies', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ title, year })
    })
    .then(res => res.json())
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
    const { error, movies } = this.state
    return (
      <div className="App">
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
