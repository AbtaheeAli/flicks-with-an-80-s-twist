import React, { Component } from 'react'
export class Movie extends Component {
  render() {
    const { title, poster_path, overview } = this.props

    return (
      <li className="media border border-info">
        <img
          src={`https://image.tmdb.org/t/p/w185${poster_path}`}
          height="150"
          width="150"
          className="p-2"
        />
        <span className="movie-info">
          <h5 className="mt-2 mb-1">{title}</h5>
          {overview}
        </span>
      </li>
    )
  }
}
