import { useState } from "react";

const Counter = () => {
  const [ count, useCount ] = useState(0)
  return (
    <div>
      <h1>{count}</h1>
      <button
      onClick= {() => {useCount(count + 1)}}
      >+</button>
    </div>
  )
}

export default Counter