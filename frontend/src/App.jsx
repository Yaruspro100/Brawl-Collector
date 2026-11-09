import './App.css'
import trophyIcon from './assets/icons/icon_trophy.png'
import { useState } from 'react';

function App() {

  const [tag, setTag] = useState('');
  const [player, setPlayer] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    const res = await fetch(`/player/${encodeURIComponent(tag)}`);
    const data = await res.json();
    setPlayer(data);
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
      {player && (
          <div className="player-header">
          <img className="player-icon" src={player.iconUrl} alt={player.name} />
          <h2 className="player-nickname">{player.name}</h2>
          <button className="player-tag">{player.tag}</button>
          <span className="trophies-amount">{player.trophies}</span>
          <img className="trophies-icon" src={trophyIcon} alt="trophies" />
        </div>
      )}
    </div>
  )
}

export default App
