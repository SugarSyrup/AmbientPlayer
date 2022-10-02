import React, { Component } from "react";

import classnames from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faPlay, faPause } from "@fortawesome/free-solid-svg-icons";


/* <FontAwesomeIcon icon={faPause} /> */

class Music extends Component {
    render() {
        var lists = [];
        var musics = this.props.MusicList;

        musics.forEach(music => {
            lists.push(
                <div key={music} className={classnames('music', music)}>
                    <FontAwesomeIcon icon={faPlay}  />  
                </div>
            )
        });
        return (
            <div className="MusicSecion">
                {lists}
            </div>
        )
    }
}

export default Music;