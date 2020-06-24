import React, { Component } from 'react'
class Movie extends Component {
  render() {
    return (
      <article>
        <li className="list-group-item">{this.props.name}</li>
      </article>
    )
  }
}

class App extends Component {
  render() {
    return (
      <main className="container p-5">
        <div className="jumbotron bg-info text-white">
          <h1 className="display-4">Flicks With An 80's Twist</h1>
          <p className="lead">
            A simple movies API that displays information about 80's movies.
          </p>
        </div>
        <ul className="list-group">
          <Movie name="Movie 1" />
          <Movie name="Movie 2" />
          <Movie name="Movie 3" />
          <Movie name="Movie 4" />
          <Movie name="Movie 5" />
        </ul>
      </main>
    )
  }
}

export default App
