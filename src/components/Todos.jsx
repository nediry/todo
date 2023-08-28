import React from 'react';
import Todo from './Todo';

const Todos = ({ todos, setTodos, setEditTodo }) => {
    const onCompleted = (id) => {
        setTodos(
            todos.map(todo => {
                if (todo.id === id) {
                    return { ...todo, completed: !todo.completed }
                }
                return todo;
            })
        )
    }
    const onEdit = (id) => {
        const findTodo = todos.find(todo => todo.id === id);
        setEditTodo(findTodo);
    }
    const onDelete = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    }
    return (
        <div>
            {
                todos.map(todo => (
                    <Todo key={todo.id} todo={todo} onCompleted={onCompleted} onEdit={onEdit} onDelete={onDelete} />
                ))
            }
        </div>
    )
}

export default Todos;