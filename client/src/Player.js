import React,{Component} from "react";
import styled from "styled-components";


class Player extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        console.log("players props",this.props.player)
        return(<div key={this.props.player.id}>
            <h1>Name: {this.props.player.name} </h1>
            <h1>Country: {this.props.player.country} </h1>
            <h1>Searches: {this.props.player.searches} </h1>
        </div>)
    }
}

export default Player;