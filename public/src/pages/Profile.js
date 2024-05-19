import React, { useState } from 'react';
import UserAvatar from '../components/UserAvatar';

const Profile = ({ user, games, friends, leaderboard, onAddFriend }) => {
  const [newFriend, setNewFriend] = useState('');

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="profile-page">
      <h1>Profile</h1>
      <UserAvatar avatarUrl={user.avatarUrl} username={user.username} />
      <h2>User Stats:</h2>
      <p>Total Games Played: {user.gamesPlayed.length}</p>
      <p>ELO Rating: {user.elo}</p>
      <h2>Leaderboard:</h2>
      <ul>
        {leaderboard.map((player, index) => (
          <li key={index}>{index + 1}. {player.username} - ELO: {player.elo}</li>
        ))}
      </ul>
      <h2>Friends List:</h2>
      <ul>
        {friends.map((friend, index) => (
          <li key={index}>{friend.username}</li>
        ))}
      </ul>
      <h2>Previous Game History:</h2>
      <ul>
        {games.map((game, index) => (
          <li key={index}>
            Game vs {game.opponentUsername} - {game.date} - {game.result} - Points Gained: {game.pointsGained}
          </li>
        ))}
      </ul>
      <h2>Add a Friend:</h2>
      <input
        type="text"
        placeholder="Enter friend's username"
        value={newFriend}
        onChange={(e) => setNewFriend(e.target.value)}
      />
      <button onClick={() => onAddFriend(newFriend)}>Add Friend</button>
      <button onClick={() => window.location.href = '/login'}>Logout</button>
    </div>
  );
};

export default Profile;
