import React,{useState} from 'react'

function UsestateHook() {
    const[count,setCount]=useState(0)
  return (
    <>
    <br/><br/><br/>
    <h1>stuti {count}</h1>
    <button onClick={()=>setCount(count+1)}>Press</button>
    </>
  )
}

export default UsestateHook