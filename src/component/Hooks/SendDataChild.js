import React from 'react'

function SendDataChild(props) {
    const data={name:'ram',email:'ram@hmail.com'}
  return (
    <>
    {/* <h1>{props.name}</h1> */}
    <button onClick={()=>{props.alert(data)}}>send data</button>
    </>
  )
}

export default SendDataChild