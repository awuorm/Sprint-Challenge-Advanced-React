import React,{Component} from "react";
import Player from "./Player";


class Players extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        console.log("players props",this.props.players)
        return(<div>{
            this.props.players.map((player) => 
                <Player player={player}/>
            )
        }</div>)
    }
}

export default Players;