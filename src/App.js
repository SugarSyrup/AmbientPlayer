import Music from "./Components/Music";
import Player from "./Components/Player";
import BackGround from "./Components/BackGround"

import React, {Component} from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      musicState:true,
      musicList:["valley","sunshine", "ocean", "rainy", "fallingLeaves", "city", "snowy", "campfire"],
    }
  }
  render(){
    return (
      <div className="custom">
        <BackGround />
        <Music MusicList={this.state.musicList} />
        <Player />
      </div>
    );
  }
}

export default App;
