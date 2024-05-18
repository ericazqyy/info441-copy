import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
    <div className="home-page">
        <h1>Welcome to Wordle 1v1</h1>
        <p>Ready to start a game? Choose an option below!</p>
        <ul>
            <li><Link to="/learn">Learn How to Play</Link></li>
            <li><Link to="/profile">Previous Game History</Link></li>
            <li><Link to="/profile">My Game Stats</Link></li>
            <li><Link to="/create-lobby">Create Lobby</Link></li>
            <li><Link to="/join-lobby">Join Lobby</Link></li>
        </ul>
    </div>
);

export default Home;
