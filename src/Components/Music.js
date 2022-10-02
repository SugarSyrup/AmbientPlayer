import React, { Component } from "react";
import useSound from 'use-sound';

import classnames from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faPlay, faPause } from "@fortawesome/free-solid-svg-icons";


/* <FontAwesomeIcon icon={faPause} /> */



class Music extends Component {
    constructor(props) {
        super(props);
        this.state = {
            soundURL:`./assets/musics/${this.props.musicName}`,
        }
    }
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
                    <FontAwesomeIcon icon={faPlay}  />  
                </div>
            )
        });
        return (
            <div className="MusicSection">
                {lists}
            </div>
        )
    }
}

export default Music;