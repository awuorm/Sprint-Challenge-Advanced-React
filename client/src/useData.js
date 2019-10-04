
import {useState, useEffect} from 'react';
import axios from "axios";

const playersAPi = `http://localhost:5000/api/players`;

const useData = () => {
    const [players, setPlayers] = useState([]);
    useEffect(() => {
        axios.get(playersAPi)
        .then(res => {
            console.log("Response from server",res);
            setPlayers(res.data);
        })
        .catch(err => {
            console.log(err.message);
        })
},[]);

return [players,setPlayers];
}

export default useData;
