import React, { Component } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faVolumeHigh, faVolumeOff  } from "@fortawesome/free-solid-svg-icons";

class Player extends Component {
    render() {
        return (
            <div className="Music-Player">
                <div className="Music-Player-Btns">
                    <div className="btn-start">
                        <FontAwesomeIcon icon={faPlay} />
                        {/* <FontAwesomeIcon icon={faPause} /> */}
                    </div>
                    <div className="btn-next">
                        <FontAwesomeIcon icon={faVolumeHigh} />
                        {/* <FontAwesomeIcon icon="fa-solid fa-volume-slash" /> */}
                    </div>
                </div>
                <div className="Music-Player-Timeline">
                    <input type="range"></input>
                </div>
            </div>
        )
    }
}

export default Player;