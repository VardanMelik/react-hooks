import React, { useState, useCallback } from 'react'
import axios from 'axios'
import Child from './Child'

function CallBackHook() {
    const [toggle, setToggle] = useState(false)
    const [data, setData] = useState("Yo, please sub to the channel")

    const returnComment = useCallback( 
        (name) => {
            return data + name
    }, [data]
    )

    return (
        <div>
            <Child returnComment={returnComment} />
            <button
                onClick={ () => {
                    setToggle(!toggle)
                }}
            >
                {" "}
                Toggle
            </button>
            {toggle && <h1> toggle</h1>}
        </div>
    )
}

export default CallBackHook
