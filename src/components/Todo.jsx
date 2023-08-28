import React, { useState } from 'react';

const Todo = ({ todo, onCompleted, onEdit, onDelete }) => {
    const [visible, setVisible] = useState(false);
    const onClick = () => setVisible(!visible);
    const onClickCompleted = (id) => onCompleted(id);
    const onClickEdit = (id) => onEdit(id);
    const onClickTrash = (id) => onDelete(id);
    return (
        <div className="todo">
            <input type="text" className="title" value={todo.title} readOnly
                onClick={() => onClick()} onChange={e => e.preventDefault()}
                style={todo.completed ? { textDecoration: "line-through", color: "red" } : null} />
            <i className="fa fa-check-circle" onClick={() => onClickCompleted(todo.id)} style={{ color: "green" }} ></i>
            <i className="fa fa-edit" onClick={() => onClickEdit(todo.id)} style={{ color: "yellow" }} ></i>
            <i className="fa fa-trash" onClick={() => onClickTrash(todo.id)} style={{ color: "red" }}></i>
            {
                visible ? <input className="description" type="text" readOnly value={todo.description}
                    onChange={e => e.preventDefault()} /> : null

            }
        </div>
    )
}

export default Todo;