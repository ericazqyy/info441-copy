import { BrowserRouter as Router, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import Home from './pages/Home';
import LearnHowToPlay from './pages/LearnHowToPlay';
import Profile from './pages/Profile';
import CreateLobby from './pages/CreateLobby';
import JoinLobby from './pages/JoinLobby';
// import Game from './pages/Game';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
        <Routes path="/" exact component={Home} />
        <Routes path="/login" component={Login} />
        <Routes path="/learn" component={LearnHowToPlay} />
        <Routes path="/profile" component={Profile} />
        <Routes path="/create-lobby" component={CreateLobby} />
        <Routes path="/join-lobby" component={JoinLobby} />
    </Router>
  );
}

// 
export default App;
