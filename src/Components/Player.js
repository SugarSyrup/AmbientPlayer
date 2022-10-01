import React, { Component } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBackward, faPlay, faPause, faForward} from "@fortawesome/free-solid-svg-icons";

class Player extends Component {
    render() {
        return (
            <div className="Music-Player">
                <div className="Music-Player-Btns">
                    <div className="btn-before">
                        <FontAwesomeIcon icon={faBackward} />
                    </div>
                    <div className="btn-start">
                        <FontAwesomeIcon icon={faPlay} />
                        <FontAwesomeIcon icon={faPause} />
                    </div>
                    <div className="btn-next">
                        <FontAwesomeIcon icon={faForward} />
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