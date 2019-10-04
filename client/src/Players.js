import React,{Component} from "react";
import Player from "./Player";


class Players extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(<div>{
            this.props.players.map((player) => 
                <Player key={player.id} player={player}/>
            )
        }</div>)
    }
}

export default Players;