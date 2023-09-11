import React,{forwardRef} from 'react'

function ForwardRef(props,ref) {
  return (
    <div>
        <h1>Forward ref</h1>
        <input type='text'ref={ref}/>
    </div>
  )
}

export default forwardRef(ForwardRef)