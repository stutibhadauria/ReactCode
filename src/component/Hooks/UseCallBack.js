import React, { useCallback, useState } from 'react'
import ChildComponent from './ChildComponent';

function UseCallBack() {
    const[count,setCount]=useState(0)
    console.log('Parent Re-render');
    const[count1,setCount1]=useState(0) 
    const IncrementCount=useCallback(()=>{
        // setCount1((prevCount)=>prevCount+1)
        console.log('use cll back hook');
    },[])

    return (
    <div>
     <h1>Use CallBack</h1>
     <h2>Count:{count}</h2>
     <button onClick={()=>setCount(count+1)}>Increment count</button>
     <br/><br/><br/>
     <h2>count1:{count1}</h2>
     <ChildComponent increment={IncrementCount}/>
    </div>
  )
}

export default UseCallBack


//value return chiye toh use memo .
//usecall back ka use jab ek function child m pass krege