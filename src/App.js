import "./App.css";
import Accordian from "./components/Accordian";
import Example from "./components/Example";
import SongItemList from "./components/SongItemList";
import liveStream from "./components/liveStream";
function App() {
  return (
    <div className="App">
      <SongItemList
        order="01"
        title="Để mãi có nhau"
        singer={["Bùi Anh Tuấn"]}
        viewCount="3200"
      />
      <SongItemList
        order="02"
        title="You got me chìm sâu"
        singer={["MCK//Nger", "G-Ducky"]}
      />
      <liveStream title="Hello VietNam" />
    </div>
  );
}

export default App;
