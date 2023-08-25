import React,{useState} from 'react'

function UseState1() {
    const[count,setCount]=useState(0)
   
  return (
    <>
    <br/><br/><br/><br/>
    <h1>i get chocolate {count} Times</h1>
  <button onClick={()=>setCount(count+1)}>Click me</button>
    </>
  )
}

export default UseState1