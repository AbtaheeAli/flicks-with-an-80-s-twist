import React, { Component } from 'react'
import { Movie } from './components/Movie'

class App extends Component {
  state = {
    movies: [],
  }

  async componentDidMount() {
    fetch(
      'https://api.themoviedb.org/3/discover/movie?primary_release_year=1989&sort_by=popularity.desc&api_key=5dc961f3bd05194965b6ed408775ebab'
    )
      .then(response => {
        return response.json()
      })
      .then(responseFromApi => {
        console.log(responseFromApi)

        this.setState({ movies: responseFromApi.results })
      })
  }

  render() {
    console.log(this.state.movies)
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
