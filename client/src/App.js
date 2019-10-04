import React from 'react';
import './App.css';
import Players from './Players';
import useData from "./useData";

function App() {
const [players, setPlayers] = useData([]);
  return (
    <div className="App">
      <Players setPlayers={setPlayers} players={players}/>
    </div>
  );
}
export default App;


