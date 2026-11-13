import './App.css'
import { useState } from 'react';
import Header from './components/Header';
import PlayerCard from './components/PlayerCard';

function App() {

  const [player, setPlayer] = useState(null);

  return (
    <div>
      <Header onPlayerLoader={setPlayer}></Header>
      <PlayerCard player={player}></PlayerCard>
    </div>
  )
}

export default App
