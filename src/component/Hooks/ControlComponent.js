import React, { useState } from 'react'

function ControlComponent() {
    const[InputValue,setInputValue]=useState()
    const handleChange=(event)=>{
        setInputValue(event.target.value)
        console.log(InputValue);
    }
  return (
    <div>
    <h1>Control Component</h1>
    <input type='text' value={InputValue} onChange={handleChange}/>
    <h2>current value:{InputValue}</h2>
    </div>
  )
}

export default ControlComponent