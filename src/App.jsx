import React, { useState } from 'react'
import { MdDeleteOutline } from "react-icons/md";


const App = () => {

  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const addTask = () => {
    if (input.trim() === "") return;

    const newTodo = {
      id: Date.now(),
      text: input,
      completed: false,
    };

    setTodos([...todos, newTodo]);
    setInput("");
  }

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  }



  return (
    <>
      <div className='min-h-screen flex items-center justify-start pt-15 flex-col '>

        <div className="bg-white border rounded-lg shadow-lg flex flex-col items-center p-6">
          {/* TODO TEXT */}

          <div className='mt-10 text-2xl'>
            <h1>TODO LIST </h1>
          </div>

          {/* INPUT

        */}
          <div className='flex flex-col sm:flex-row gap-3 w-full max-w-md mt-5'>
            <input type="text" value={input} onChange={(e) => { setInput(e.target.value) }} className='bg-red-50 border rounded-lg h-10 pl-3 flex-1 w-full' placeholder='Enter task' />
            <button className='bg-red-200 rounded-lg px-4 h-10 whitespace-nowrap' onClick={addTask}>Add</button>
          </div>

          {/* CONTENT */}


          <div className=''>
            <ul >
              {todos.map((todo) => (
                <li key={todo.id} className='flex justify-between gap-20 mb-5 items-center'>
                  <input type="checkbox" checked={todo.completed} onChange={() => toggleTodo(todo.id)} className='size-4' />
                  <span className={`ml-2 ${todo.completed ? "line-through" : "no-underline"} text-xl flex items-center`}>
                    {todo.text}
                  </span>
                  <button onClick={() => deleteTodo(todo.id)} className='size-4'><MdDeleteOutline className='size-7' /></button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default App