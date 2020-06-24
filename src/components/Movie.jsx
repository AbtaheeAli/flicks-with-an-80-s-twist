import React, { Component } from 'react'
export class Movie extends Component {
  render() {
    const { title, poster_path, overview } = this.props

    return (
      <li className="list-group-item">
        <span className="movieItem">
          <img src={poster_path} height="100" width="100" />
        </span>
        <span>{title}</span>
        <span className="movieItem">{overview}</span>
      </li>
    )
  }
}
