import Music from "./Components/Music";
import Player from "./Components/Player";
import BackGround from "./Components/BackGround"

import React, {Component} from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      musicState:true,
      musicList:["sunshine","valley", "ocean", "rainy", "fallingLeaves", "city", "snowy", "campfire"],
      music:"sunshine",
    }
  }
  render(){
    return (
      <div className="custom">
        <BackGround currentMusic={this.state.music}/>
        <Music MusicList={this.state.musicList} onClickMusic={function(musicName) {
          console.log(musicName);
          this.setState({
            music:musicName,
          })
        }.bind(this)} />
        <Player currentMusic={this.state.music} />
      </div>
    );
  }
}

export default App;
