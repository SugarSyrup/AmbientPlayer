import React, { Component } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause, faVolumeHigh, faVolumeMute  } from "@fortawesome/free-solid-svg-icons";
import ReactAudioPlayer from 'react-audio-player';


class Player extends Component {
    constructor(props) {
        super(props);
        this.state = {
            audio : true,
            play : true,
        }
    }
    render() {
        return (
            <div className="Music-Player">
                <ReactAudioPlayer src={require(`../assets/musics/${this.props.currentMusic}.mp3`)} autoPlay/>
                <div className="Music-Player-Btns">
                    <div className="btn-start">
                        <FontAwesomeIcon icon={this.state.play ? faPause : faPlay} onClick={function(event) {
                            if(document.querySelector('audio').paused){
                                document.querySelector('audio').play();
                            } else {
                                document.querySelector('audio').pause();
                            } 
                            this.setState({
                                play: !document.querySelector('audio').paused,
                            })
                        }.bind(this)}/>
                    </div>
                    <div className="btn-volume">
                        <FontAwesomeIcon icon={this.state.audio ? faVolumeHigh : faVolumeMute} onClick={function(event) {
                            document.querySelector('audio').muted = !document.querySelector('audio').muted;
                            this.setState({
                                audio: !document.querySelector('audio').muted,
                            })
                        }.bind(this)}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Player;