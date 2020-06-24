import React, { Component } from 'react'
import HelloWorld from './components/HelloWorld'

class App extends Component {
  render() {
    return (
      <main className="container p-5">
        <div class="jumbotron bg-info text-white">
          <h1 class="display-4">Flicks With An 80's Twist</h1>
          <p class="lead">
            A simple movies API that displays information about 80's movies.
          </p>
        </div>
        <ul className="list-group">
          <li className="list-group-item">Movie 1</li>
          <li className="list-group-item">Movie 2</li>
          <li className="list-group-item">Movie 3</li>
          <li className="list-group-item">Movie 4</li>
          <li className="list-group-item">Movie 5</li>
        </ul>
      </main>
    )
  }
}

export default App
