import React, { useState } from 'react'

function UseStateInputHook() {
    const [inputValue, setInputValue] = useState("Pedro")
    
    let onChnage = (event) => {
        const newValue = event.target.value;
        setInputValue(newValue);
    }
    
    return (
        <div>
            <input
                placeholder="enter something ..."
                onChange={onChnage}
            />
            {inputValue}
        </div>
    )
}

export default UseStateInputHook
