import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';

export default class SavedList extends Component {
  


  render() {
    return (
      <div className="saved-list">
        <h3>Saved Movies:</h3>
        {this.props.list.map(movie => (
          <NavLink key={movie.id} to={`/movies/${movie.id}`} activeClassName="activeNavButton" className="saved-movie">{movie.title}</NavLink>
        ))}
        <Link to={'/'}><div className="home-button">Home</div></Link>
      </div>
    );
  }
}
