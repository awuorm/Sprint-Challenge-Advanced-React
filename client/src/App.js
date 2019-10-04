import React, {useState, useEffect} from 'react';
import './App.css';
import axios from "axios";
import Players from './Players';
import useData from "./useData";

const playersAPi = `http://localhost:5000/api/players`;

function App() {
const [players, setPlayers] = useData([]);

    // useEffect(() => {
    //     axios.get(playersAPi)
    //     .then(res => {
    //         console.log("Response from server",res);
    //         setPlayers(res.data);
    //     })
    //     .catch(err => {
    //         console.log(err.message);
    //     })
    // },[]);
  return (
    <div className="App">
      <Players players={players}/>
    </div>
  );
}

export default App;


