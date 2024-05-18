import React from 'react';

const OpponentProgress = ({ avatarUrl, username, guessesLeft }) => (
  <div className="opponent-progress">
    <img src={avatarUrl} alt={`${username}'s avatar`} />
    <p>{username}</p>
    <p>Guesses Left: {guessesLeft}</p>
  </div>
);

export default OpponentProgress;
