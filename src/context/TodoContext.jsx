import { createContext, useState } from "react";

const TodoContext = createContext();

export const TodoProvider = ({ children }) => {


    // This is Create LIST ITEM
    const [todos, setTodos] = useState([])
    const addTodo = (text) => {
        const newTodo = {
            id: crypto.randomUUID(),
            text: text,
        };
        setTodos([newTodo, ...todos])
    }


    // This is Use To Delete Function
    const removeTodo = (id) => {
        setTodos(todos.filter((item) => item.id !== id))
    }


    // This is use To Edit
    const [edit, setEdit] = useState({
        todo: {},
        editMode: false,
    });

    // Edit
    const editTodo = (todo) => {
        setEdit({
            todo: todo,
            editMode: true,
        });



    };

    // Update
    const updateTodo = (oldId, newText) => {
        // console.log(oldId)
        setTodos(
            todos.map((item) => item.id === oldId ? { id: oldId, text: newText, } : item)
        );

        setEdit({
            todo: {},
            editMode: false,
        });
    };



    return (
        <TodoContext.Provider value={{ todos, addTodo, removeTodo, edit, editTodo, updateTodo }}>
            {children}
        </TodoContext.Provider>
    );
};

export default TodoContext;