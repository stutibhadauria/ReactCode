import React, { useState } from 'react'

export default function Condition() {
    const[login,setLogin]=useState(1)
  return (
    <>
    <br/><br/><br/>
    {
      login==1?
      <h1>Welcome user 1</h1>
      :login==2?<h1>Welcome user 2</h1>
      :<h1>Welcome user other!!</h1>
    }
    <button onClick={()=>setLogin()}>click me</button>
    </>
  )
}
