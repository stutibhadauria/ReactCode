import React,{useState} from 'react'

function HiddenShowToken() {
    const[status,setStatus]=useState(true)
  return (
    <>
    <h1>Hidden Show Toggle</h1>
    {status?<h1>hello</h1>:null}
    <button onClick={()=>setStatus(false)} className='btn btn-primary'>Hide</button><br/><br/>
    <button onClick={()=>setStatus(true)} className='btn btn-danger'>Show</button><br/><br/>
    <button onClick={()=>setStatus(!status)} className='btn btn-warning'>Toggle</button>
    </>
  )
}

export default HiddenShowToken