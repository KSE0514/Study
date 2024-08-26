import { useState, useEffect } from "react";

function App() {
  const [ counter, setCounter ] = useState(0)
  const onClick = () => setCounter((pre) => pre+1)
  console.log("render")
  
  useEffect(() =>{
    console.log("Only one render...")
  }
  , [])
  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={onClick}>Click me</button>
    </div>
  );
}

export default App;
