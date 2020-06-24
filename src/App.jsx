import React, { Component } from 'react'
import { Movie } from './components/Movie'
import sampleMovies from './data/movies-api'

class App extends Component {
  state = {
    movies: sampleMovies,
  }
  render() {
    const moviesToRender = this.state.movies.map(movie => (
      <Movie
        key={movie.id}
        title={movie.title}
        poster_path={movie.poster_path}
        overview={movie.overview}
      />
    ))

    return (
      <main className="container p-5">
        <div className="jumbotron bg-info text-white">
          <h1 className="display-4">Flicks With An 80's Twist</h1>
          <p className="lead">
            A simple movies API that displays information about 80's movies.
          </p>
        </div>
        <ul className="list-group">{moviesToRender}</ul>
      </main>
    )
  }
}

export default App
