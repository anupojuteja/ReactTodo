import { useState, useEffect } from 'react';
import './App.css';

function Todo() {
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
    setNewTask(''); // Clear the input field  ..
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

export default Todo;