import React, { Component } from "react";


class BackGround extends Component {
    render() {
        return (
            <div className="background" style={{backgroundImage:`url(${require(`../assets/images/${this.props.currentMusic}.png`)})`}}></div>
        )
    }
}

export default BackGround;