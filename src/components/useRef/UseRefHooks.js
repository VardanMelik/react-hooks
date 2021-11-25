import React, { useRef } from 'react'

function UseRefHooks() {
    const inputRef = useRef(null)
    const onClick = () => {
        console.log(inputRef.current.value)
        inputRef.current.value = ""
        inputRef.current.focus()
    }

    return (
        <div>
            <h1>Pedro</h1>
            <input type="text" placeholder="Ex..." ref={inputRef} />
            <button onClick={onClick}>Change Name</button>
        </div>
    )
}

export default UseRefHooks
