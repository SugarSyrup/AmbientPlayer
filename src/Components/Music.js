import React, { Component } from "react";

import classnames from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faPlay } from "@fortawesome/free-solid-svg-icons";

class Music extends Component {
    render() {
        var lists = [];
        var musics = this.props.MusicList;

        musics.forEach(music => {
            lists.push(
                <div key={music} className={classnames('music', music)} 
                onMouseEnter={function(event){
                    event.target.querySelector('svg').style.display = "block";
                }}
                onMouseLeave={function(event){
                    event.target.querySelector('svg').style.display = "none";
                }}
                >
                    <FontAwesomeIcon icon={faPlay} onClick={function(event){
                        this.props.onClickMusic(music);
                    }.bind(this)}/>  
                </div>
            )
        });
        return (
            <div className="MusicSection">
                {lists}
                <span className="LOGO">Ambient Player</span>
            </div>
        )
    }
}

export default Music;