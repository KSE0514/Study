import { useReducer } from "react";

const Bulb = () => {
  const { light, useLight } = useReducer("OFF")
  <button
    onClick={() => {useReducer(light = )}}  
  ></button>

  return (
    light === "ON" ? 
    <div style={{backgroundColor:"orange"}}>{light}</div> :
    <div style={{backgroundColor:"gray"}}>{light}</div>
  )
}

export default Bulb;