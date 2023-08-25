import React,{useRef} from 'react'

function UseRef() {
    let inputRef=useRef(null)
    function controlInput(){
        inputRef.current.value='stuti bhadauria'
        inputRef.current.focus()
        inputRef.current.style.color='red'
        inputRef.current.style.backgroundColor='skyblue'
    }
  return (
    <div>
        <input type='text' ref={inputRef}/>
        <h1>use ref</h1>
        <button onClick={controlInput}>handle input</button>
    </div>
  )
}

export default UseRef