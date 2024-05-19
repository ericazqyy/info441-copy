import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import Home from './pages/Home';
import LearnHowToPlay from './pages/LearnHowToPlay';
import Profile from './pages/Profile';
import CreateLobby from './pages/CreateLobby';
import JoinLobby from './pages/JoinLobby';
import Game from './pages/Game';

const App = () => {
  const [user, setUser] = useState(null);
  const [games, setGames] = useState([]);
  const [friends, setFriends] = useState([]);
  const [leaderboard, setLeaderboard] = useState([]);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch('/api/user/myIdentity');
        const data = await response.json();
        setUser(data.userInfo);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    const fetchGames = async () => {
      try {
        const response = await fetch('/api/game');
        const data = await response.json();
        setGames(data);
      } catch (error) {
        console.error('Error fetching games data:', error);
      }
    };

    const fetchFriends = async () => {
      try {
        const response = await fetch(`/api/user/friends/${user?.userID}`);
        const data = await response.json();
        setFriends(data);
      } catch (error) {
        console.error('Error fetching friends data:', error);
      }
    };

    const fetchLeaderboard = async () => {
      try {
        const response = await fetch('/api/user/leaderboard');
        const data = await response.json();
        setLeaderboard(data);
      } catch (error) {
        console.error('Error fetching leaderboard data:', error);
      }
    };

    fetchUserData();
    fetchGames();
    fetchFriends();
    fetchLeaderboard();
  }, [user?.userID]);

  const handleAddFriend = async (friendUsername) => {
    try {
      const response = await fetch('/api/user/friend-request', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ senderUsername: user.username, receiverUsername: friendUsername }),
      });
      const data = await response.json();
      if (data.status === 'success') {
        setFriends((prevFriends) => [...prevFriends, { username: friendUsername }]);
      }
    } catch (error) {
      console.error('Error adding friend:', error);
    }
  };

  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <Home user={user} />
        </Route>
        <Route path="/login" component={Login} />
        <Route path="/learn">
          <LearnHowToPlay user={user} />
        </Route>
        <Route path="/profile">
          <Profile user={user} games={games} friends={friends} leaderboard={leaderboard} onAddFriend={handleAddFriend} />
        </Route>
        <Route path="/create-lobby">
          <CreateLobby user={user} />
        </Route>
        <Route path="/join-lobby">
          <JoinLobby user={user} />
        </Route>
        <Route path="/game">
          <Game user={user} />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
