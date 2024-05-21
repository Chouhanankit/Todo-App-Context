import React, { useContext } from "react";
import ListGroupItem from "./ListGroupItem";
import TodoContext from "../context/TodoContext";


const ListGroup = () => {

    const { todos } = useContext(TodoContext);
    //This is use to not todo list to show this Text Message
    if (todos.length === 0) {
        return <h1 className="text-center my-3 display-3">No Todos Yet..</h1>;
    }

    return (
        <ul className="list-group my-3">
            {todos.map((todo) => (<ListGroupItem key={todo.id} todo={todo} />))}
        </ul>
    );
};

export default ListGroup;