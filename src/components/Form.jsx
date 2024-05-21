import React, { useContext, useEffect, useState } from 'react'
import TodoContext from '../context/TodoContext'

const Form = () => {

    const { addTodo, edit, updateTodo } = useContext(TodoContext);
    // This is Store add value in li
    const [text, setText] = useState("")
    const handleSubmit = (e) => {
        e.preventDefault();
        // addTodo(text)  :- This is add only function not update

        // This is Update todo
        if (edit.editMode) {
            updateTodo(edit.todo.id, text)
        } else {
            addTodo(text);
        }

        setText("")
    }

    // This is Use To Edit or Update Function
    useEffect(() => {
        setText(edit.todo.text);
    }, [edit]);



    return (
        <form className='my-3' onSubmit={(e) => handleSubmit(e)}>
            <input className='form-control rounded-0' type="text" placeholder='Enter The Text...' value={text} onChange={(e) => setText(e.target.value)} />
            <button className='btn btn-success btn-sm w-100 rounded-0 my-2'>Save</button>
        </form>
    )
}

export default Form