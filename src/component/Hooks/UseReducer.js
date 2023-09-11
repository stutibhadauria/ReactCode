import React, { useState } from 'react'
import UseReducer1 from './UseReducer1'

function UseReducer() {
    const[count,setCount]=useState(0)
  return (
    <>
    <h2>Count:{count}</h2>
      <button onClick={() => setCount(count + 1)}>INCREMENT Count</button>
      <button onClick={() => setCount(count - 1)}>DECREMENT Count</button>
      <UseReducer1/>
    </>
  )
}

export default UseReducer