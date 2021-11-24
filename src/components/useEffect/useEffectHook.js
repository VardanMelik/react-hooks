import React, { useEffect, useState } from 'react'
import axios from 'axios'

function UseEffectHook() {

    const [data, setData] = useState("")
    const [count, setCount] = useState(0);

    useEffect( () => {
        console.log('It renders when we render page')
        axios
            .get("https://jsonplaceholder.typicode.com/comments")
            .then( (response) => { 
                console.log("API was called")
                setData(response.data[0].email)
            })
            .catch( error => { console.log(error)})
    }, [])
    
    return (
        <div>
            Hello Use Effect <br/> 
            <h1>{data}</h1>
            <h1>{count}</h1>
            <button
                onClick={ () => {
                    setCount(count+1)
                }}
            >
                Click
            </button>
        </div>
    )
}

export default UseEffectHook
