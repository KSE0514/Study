import './App.css';
import { useState } from "react";
import Bulb from "./components/Bulb";
import Counter from "./components/Counter";

function App() {
  // const [count, setCount] = useState(0);
  // const [light, setLight] = useState("OFF");

  return (
    <>
      <Bulb />
      {/* <div>
        <Bulb light={light}/>
        <button
          onClick={() => {
            setLight(light === "ON" ? "OFF" : "ON")
          }}
        >
          {light === "ON" ? "끄기" : "켜기"}
        </button>
      </div> */}
      <Counter />
      {/* <div>
        <h1>{count}</h1>
          <button
            onClick={() => {
              setCount(count + 1);
            }}
          >+</button>      
      </div> */}
    </>
  );

}

export default App;
