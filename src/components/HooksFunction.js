import React, { useState} from 'react';

function HooksFunction() {

    const [count, setCount] = useState(0);
    const [age, setAge] = useState(42);
    const [fruit, setFruit] = useState('banana');
    const [todos, setTodos] = useState([{ text: 'Learn Hooks' }])

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={ () => setCount(count +1 )}>Click Me</button>
        </div>
    )
}

export default HooksFunction;