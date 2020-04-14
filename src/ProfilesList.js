import React, { Component } from 'react';

class ProfilesList extends Component {
  render () {
    return (
       <ul>
       {this.props.profiles.map((profile) => {
        const userName = this.props.users[profile.userID].name;
        const favoriteMovieName = this.props.movies[profile.favoriteMovieID].name;
      
        return (
          <li className='profile-list-item'>
            <h4 className='profile-heading'>{userName}</h4>
            <p>{favoriteMovieName}</p>
          </li>
        )
      })}
      </ul>
    );
  }
}

export default ProfilesList;