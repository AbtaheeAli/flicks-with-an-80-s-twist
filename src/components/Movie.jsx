import React, { Component } from 'react'
export class Movie extends Component {
  render() {
    const { title, poster_path, overview } = this.props

    return (
      <li className="list-group-item m-2">
        {title}
        <span className="movieItem m-2">
          <img src={poster_path} height="100" width="100" />
        </span>
        <span className="movieItem m-2">{overview}</span>
      </li>
    )
  }
}
