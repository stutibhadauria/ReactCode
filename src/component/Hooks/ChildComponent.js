import React,{memo} from 'react'

function ChildComponent({increment}) {
  return (
    <div>
        <h1>ChildComponent</h1>
        <button onClick={increment}>increment</button>
    </div>
  )
}

export default memo(ChildComponent)