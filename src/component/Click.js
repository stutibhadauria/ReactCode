import React from 'react'

function Click() {
    let name='stuti'
    function hello(a){
        name=a
        alert(name)
    }
    console.log('hello gwalior')
  return (
    <>
    <br/><br/><br/>
    <h1>hello {name}</h1>
    <button onClick={hello}>update</button>
    <button onClick={()=>hello("raj")}>click me</button>
    </>
  )
}

export default Click