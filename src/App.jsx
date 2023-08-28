import React, { useState, useEffect } from 'react';
import './index.css';
import AddTodo from './components/AddTodo';
import Todos from './components/Todos';

const App = () => {
    const initialState = JSON.parse(localStorage.getItem("todos")) || [];
    const [todos, setTodos] = useState(initialState);
    const [editTodo, setEditTodo] = useState(null);

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    return (
        <div className="container">
            <header>TODO APP</header>
            <hr />
            <AddTodo todos={todos} setTodos={setTodos} editTodo={editTodo}
                setEditTodo={setEditTodo} />
            <hr />
            <Todos todos={todos} setTodos={setTodos} setEditTodo={setEditTodo} />
        </div>
    )
}

export default App;