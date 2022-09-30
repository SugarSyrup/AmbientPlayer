import React, { Component } from "react";
import classnames from "classnames";

class Music extends Component {
    render() {
        return (
            <div className={classnames('music', this.props.musicName)}>

            </div>
        )
    }
}

export default Music;