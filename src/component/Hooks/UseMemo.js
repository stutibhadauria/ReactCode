import React, { useState,useMemo } from 'react'

function UseMemo() {
    const[count,setCount]=useState(0)
    const[item,setItem]=useState(10)

    // function multicount(){
    //     console.log('multicount');
    //     return count*5;
    // }

    const multicountmemo=useMemo(
        function multicount(){
            console.log('mutlicount');
            return count*5;
        },[count])
  return (
    <div>
        <h1>Use memo hooks</h1>
        <h1>hooks in react:{count}</h1>
        <h1>hooks in item:{item}</h1>
        {/* <h2>{multicount()}</h2> */}
        <h2>{multicountmemo}</h2>
        <button onClick={()=>setCount(count+1)}>update count</button>
        <button onClick={()=>setItem(item*10)}>update item</button>
    </div>
  )
}

export default UseMemo