import React, { useEffect, useState } from 'react'

function UseEffect() {
    const [count, setCount] = useState(0);
    useEffect(()=>{
        console.log('use effect')
    },[])
    console.log('hello render');
    return (
     
      <>
      <br/><br/><br/>
      <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>
          Click me
        </button>
      </>
    )
}

export default UseEffect