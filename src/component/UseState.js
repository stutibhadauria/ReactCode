import React,{useState} from 'react'

function UseState() {
    const[data,setData]=useState('stuti')

    function updatedata(){
         setData('disha')
    }
    console.log('render component')
  return (
    <>
    <br/><br/><br/><br/>
    <h1>hello {data}</h1>
    <button onClick={updatedata}>update</button>
    </>
  )
}

export default UseState