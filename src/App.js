import Player from "./Components/Player";
import Music from "./Components/Music";

function App() {
  return (
    <div className="Music-Section">
      <Music musicName="valley"/>
      <Music musicName="sunshine"/>
      <Music musicName="ocean"/>
      <Music musicName="rainy"/>
      <Music musicName="fallingLeaves"/>
      <Music musicName="city"/>
      <Music musicName="snowy"/>
      <Music musicName="campfire"/>
    </div>
  );
}

export default App;
