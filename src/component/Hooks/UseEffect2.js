import React, { useEffect, useState } from 'react'

function UseEffect2() {
    const [content, setContent] = useState('posts')
    const [count, setCount] = useState(0)
    //map
    const [items, setItems] = useState([])
    useEffect(() => {
        console.log('component did mount');
    })
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/'+content)
            .then(response => response.json())
            .then(json=>setItems(json))
            console.log('componet did update');
    },[content]) 
    console.log(items);
    return (
        <>
        <br/><br/><br/><br/>
            <button className='btn btn-success'onClick={() => setContent('posts')}>Posts</button>
            <button className='btn btn-danger' onClick={() => setContent('users')}>users</button>
            <button className='btn btn-success' onClick={() => setContent('comments')}>comments</button>
            <h1>{content}</h1>
            <button className='btn btn-danger' onClick={() => setCount(count + 1)}>count {count}</button>
            <ul>
                {items && items.map((item)=>{
                    return <li>{item.id}</li>     
                })
                }
            </ul>
        </>
    )
}

export default UseEffect2