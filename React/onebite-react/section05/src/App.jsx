import './App.css';
import { useState } from "react";

const Bulb = ({light}) => {
  console.log(light)
  return (
    light === "ON" ? 
    <div style={{backgroundColor: "orange"}}>ON</div> : 
    <div style={{backgroundColor: "gray"}}>OFF</div>
  )
}

function App() {
  const [count, setCount] = useState(0);
  const [light, setLight] = useState("OFF");

  return (
    <>
      <div>
        <Bulb light={light}/>
        <button
          onClick={() => {
            setLight(light === "ON" ? "OFF" : "ON")
          }}
        >
          {light === "ON" ? "끄기" : "켜기"}
        </button>
      </div>
      <div>
        <h1>{count}</h1>
          <button
            onClick={() => {
              setCount(count + 1);
            }}
          >+</button>      
      </div>
    </>
  );

}

export default App;
