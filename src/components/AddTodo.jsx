import React, { useState, useEffect } from 'react';
import { v4 as uuid } from "uuid";

const AddTodo = ({ todos, setTodos, editTodo, setEditTodo }) => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const changeTitle = (e) => setTitle(e.target.value);
    const changeDescription = (e) => setDescription(e.target.value);

    const updateTodo = (id, title, description, completed) => {
        const newTodo = todos.map(todo => todo.id === id ? { id, title, description, completed } : todo);
        setTodos(newTodo);
        setEditTodo("");
    }
    useEffect(() => {
        if (editTodo) {
            setTitle(editTodo.title);
            setDescription(editTodo.description);
        } else {
            setTitle("");
            setDescription("");
        }
    }, [setTitle, setDescription, editTodo]);

    const onFormSubmit = (e) => {
        e.preventDefault();
        if (!editTodo) {
            setTodos([...todos, { id: uuid(), title, description, completed: false }]);
            setTitle("");
            setDescription("");
        } else {
            updateTodo(editTodo.id, title, description, editTodo.completed);
        }
    }
    return (
        <form className="add-todo" onSubmit={onFormSubmit}>
            <div className="input-box">
                <input type="text" required
                    onChange={(e) => changeTitle(e)} value={title} />
                <span>Title of todo</span>
            </div>

            <div className="input-box">
                <input type="text" onChange={(e) => changeDescription(e)}
                    value={description} required />
                    <span>Description of todo</span>
            </div>
            <button style={editTodo ? { backgroundColor: "green" } : { backgroundColor: "blue" }}
                type="submit" className="add-button">{editTodo ? "OK" : "Add"}</button>
        </form>
    )
}

export default AddTodo;