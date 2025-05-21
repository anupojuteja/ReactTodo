// App.jsx
import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Todo from "./Todo";
import Pagination from "./Pagination";
import Parent from "./Context/Parent";

export default function App() {
  return (
    <div className="container mt-4">
      <nav className="mb-3">
      <Link to="/" className="btn btn-primary me-2">Home</Link>
        <Link to="/todos" className="btn btn-secondary me-2">Todos</Link>
        <Link to="/context" className="btn btn-success">Context Demo</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Pagination />} />
        <Route path="/todos" element={<Todo />} />
        <Route path="/context" element= {<Parent/>} />
      </Routes>
    </div>
  );
}

















   


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



