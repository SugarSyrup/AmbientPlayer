import React, { Component } from "react";


class Player extends Component {
    render() {
        return (
            <div className="Music-Player">
                <div className="Music-Player-Btns">
                    <div className="btn-before"></div>
                    <div className="btn-start"></div>
                    <div className="btn-next"></div>
                </div>
                <div className="Music-Player-Timeline">
                    <input type="range"></input>
                </div>
            </div>
        )
    }
}

export default Player;