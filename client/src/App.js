import React, {useState, useEffect} from 'react';
import './App.css';
import axios from "axios";
import Players from './Players';

const playersAPi = `http://localhost:5000/api/players`;

function App() {
const [players, setPlayers] = useState([]);

    useEffect(() => {
        axios.get(playersAPi)
        .then(res => {
            console.log("Response from server",res);
            setPlayers(res.data);
        })
        .catch(err => {
            console.log(err.message);
        },[])
    });
  return (
    <div className="App">
      Hello from App!!!!!
      <Players players={players}/>
    </div>
  );
}

export default App;


