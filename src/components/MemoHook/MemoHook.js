import React, { useEffect, useState, useMemo } from 'react'
import axios from 'axios'

function MemoHook() {
    const [data, setData] = useState(null)
    const [toggle, setToggle] = useState(false);

    useEffect( () => {
        axios
            .get("https://jsonplaceholder.typicode.com/comments")
            .then( response => {
                setData(response.data)
                console.log(response.data)
            })
            .catch( error => console.log(error))
    }, [])

    const findLongesName = (comments) => {
        if (!comments) return null;

        let longesName = "";
        for (let i=0; i < comments.length; i++) {
            let currentName = comments[i].name;
            if (currentName.length > longesName.length) {
                longesName = currentName
            }
        }

        console.log("Loop was computed")

        return longesName
    }

    const getLongestName = useMemo( () => 
        findLongesName(data), 
        [data]
    )

    return (
        <div>
            <div>{getLongestName}</div>

            <button
                onClick={ () => {
                    setToggle(!toggle)
                }}
            >
                {" "}
                Toggle
            </button>
            {toggle && <h1>toggle </h1>}
        </div>
    )
}

export default MemoHook
