// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App



import { useState, useEffect } from 'react';
import './App.css';

function App() {
  // State for the input field (new task)
  const [newTask, setNewTask] = useState('');
  // State for the list of tasks
  const [todos, setTodos] = useState(() => {
    // Load tasks from LocalStorage when the app starts
    const savedTodos = localStorage.getItem('todos');
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  // Save todos to LocalStorage whenever 'todos' changes
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  // Handle form submission to add a new task
  const addTask = (e) => {
    e.preventDefault(); // Prevent page refresh
    if (newTask.trim() === '' ) return; // Ignore empty tasks


    const isDuplicate = todos.some(
      (todo) => todo.text.toLowerCase() === newTask.trim().toLowerCase()
    );
    if (isDuplicate) {
      alert('This task already exists!'); // Notify user
      setNewTask(''); // Clear the input field
      return;
    }
  

    const task = {
      id: Date.now(), // Unique ID based on timestamp
      text: newTask,
      completed: false,
    };

    setTodos([...todos, task]); // Add new task to the list
    setNewTask(''); // Clear the input field
  };

  return (
    <div className="App">
      <h1>Todo List</h1>

      {/* Form to add a new task */}
      <form onSubmit={addTask}>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Add a new task"
        />
        <button type="submit">Add Task</button>
      </form>

      {/* List of tasks */}
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;