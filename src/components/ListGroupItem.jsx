import React, { useContext } from "react";
import TodoContext from "../context/TodoContext";

const ListGroupItem = ({ todo }) => {
    const { removeTodo, editTodo } = useContext(TodoContext);
    return (
        <li className="list-group-item rounded-0">
            <h1 className="display-6" >{todo.text}</h1>
            <span className="float-end">
                <button className="btn btn-sm btn-warning rounded-0" onClick={() => editTodo(todo)}>Edit</button>
                <button className="btn btn-sm btn-danger rounded-0" onClick={() => removeTodo(todo.id)}>Delete</button>
            </span>

        </li>
    )
};

export default ListGroupItem;
