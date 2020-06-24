import React, { Component } from 'react'
export class Movie extends Component {
  render() {
    const { title, poster_path, overview } = this.props
    return (
      <li className="list-group-item m-2">
        {title}
        <span className="movieItem m-2">{poster_path}</span>
        <span className="movieItem m-2">{overview}</span>
      </li>
    )
  }
}
