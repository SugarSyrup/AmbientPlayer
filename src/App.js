import Music from "./Components/Music";
import Player from "./Components/Player";
import BackGround from "./Components/BackGround"

import React, {Component} from "react";
// import useSound from "use-sound";

// function Demo() {  
//   const [play, { stop, isPlaying }] = useSound(soundUrl);

//   return (
//     <PlayButton
//       active={isPlaying}
//       size={60}
//       iconColor="var(--color-background)"
//       idleBackgroundColor="var(--color-text)"
//       activeBackgroundColor="var(--color-primary)"
//       play={play}
//       stop={stop}
//     />
//   );
// }

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      musicState:true,
      musicList:["sunshine","valley", "ocean", "rainy", "fallingLeaves", "city", "snowy", "campfire"],
      musicIndex:0,
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
