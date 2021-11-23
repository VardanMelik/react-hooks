import React, { useState, useReducer } from 'react'

const reducer = (state, action) => {
    switch (action.type) {
        case "INCREMENT":
            return { count: state.count + 1,
                     showText: state.showText }
        case "toggleShowText":
                return { count: state.count, 
                         showText: !state.showText}
        default: 
            return state
    }
}

function ReducerTutorial() {
    /*const [count, setCount] = useState(0);
    const [showText, setShowText] = useState(true)*/

    const [state, dispatch] = useReducer(
        reducer, 
        { count: 0, showText: true} ) 

    return (
        <div style={{
            /*width: '200px',
            height: '200px',
            display: 'flex', 
            flexFlow: 'column',
            justifyContent : 'space-between'*/
            aligItem: 'center'
        }}>
            <h1>{state.count}</h1>
            <button
                /*onClick={ () => {
                    setCount(count+1)
                    setShowText(!showText);
                }}*/
                onClick= { () => {
                    dispatch({ type: "INCREMENT"})
                    dispatch({ type: "toggleShowText"})
                }}
            >
                Click here
            </button>
            {state.showText && <p>This is a text</p>}
        </div>
    )
}

export default ReducerTutorial
