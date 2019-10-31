import React, { useState } from 'react';
import './App.css'
import HooksFunction from './components/HooksFunction';

function Todo({ todo, index}) {
  return (
    <div className="todo">
      {todo.text}
    </div>
  )
}

function TodoForm({addTodo}) {
  const [value, setValue] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if(!value) return;
    addTodo(value);
    setValue('');
  } 

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        className="input" 
        value={value} 
        placeholder="Add Todo ..."
        onChange={e => setValue(e.target.value)} 
        />  
    </form>
  )
}

function App() {
  const [todos, setTodos] = useState([
    {
      text: 'Learn about React',
      isComplated: false
    },

    {
      text: 'Meet friend for lunch',
      isComplated: false
    },

    {
      text: 'Build really cool todo app',
      isComplated: false
    },

  ]);

  const addTodo = text => {
    const NewTodos = [...todos, { text }];
    setTodos(NewTodos);
  }

  return (
    <div className="App">
      <div className="todo-list">
        {/*todos.map((todo, index) => {
          <Todo key={index} index={index} todo={todo} />
        })*/}
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );
}

export default App;
