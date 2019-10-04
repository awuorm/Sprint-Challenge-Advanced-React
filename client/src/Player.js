import React,{Component} from "react";
import styled from "styled-components";



class Player extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        console.log("players props",this.props.player)
        return(<div style={{border: "2px solid green", margin: "1em"}} key={this.props.player.id}>
            <h1 style={{fontSize:"1.1em"}}>Name: {this.props.player.name} </h1>
            <h1 style={{fontSize:"1.1em"}}>Country: {this.props.player.country} </h1>
            <h1 style={{fontSize:"1.1em"}}>Searches: {this.props.player.searches} </h1>
        </div>)
    }
}

export default Player;