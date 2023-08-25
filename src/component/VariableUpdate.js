import React from 'react'

function VariableUpdate() {
    let data='stuti'
    function updateData(){
       data='vishal'
       alert(data)
    }
  return (
    <>
    <br/><br/><br/>
    <h1>{data}</h1>
    <button onClick={updateData}>update</button>
    </>
  )
}

export default VariableUpdate