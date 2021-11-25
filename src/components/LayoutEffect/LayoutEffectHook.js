import React, { useEffect, useRef, useLayoutEffect} from 'react'

function LayoutEffectHook() {

    const divRef = useRef(null);
    

    useEffect( () => {
        divRef.current.value = "Hello"
    }, [])

    useLayoutEffect( () => {
        console.log(divRef.current.value)

    }, [])


    return (
        <div>
            <input 
                ref={divRef} 
                value="Test"
                style={{
                    width: 400,
                    height: 200
                }}
            />
        </div>
    )
}

export default LayoutEffectHook
