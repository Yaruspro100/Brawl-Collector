import './App.css'
import trophyIcon from './assets/icons/icon_trophy.png'
import { useState } from 'react';

function App() {

  const [tag, setTag] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div>
      <header className="header">
        <a href="#">
          <img src="/favicon.svg" alt="logo" width="40" height="40" />
          <h1>Brawl Collector</h1>
        </a>
        <form onSubmit={handleSubmit}>
          <input
            value={tag}
            onChange={(e) => setTag(e.target.value)}
            type="text"
            placeholder="Write your tag..."
          />
          <button type="submit">Submit</button>
        </form>
      </header>
      <div className="player-header">
        <img className="player-icon"></img>
        <h2 className="player-nickname">Player Nickname</h2>
        <button className="player-tag">#tag</button>
        <span className="trophies-amount">999999</span>
        <img className="trophies-icon" src={trophyIcon}></img>
      </div>
    </div>
  )
}

export default App
