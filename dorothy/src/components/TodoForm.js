//renders the form 
import React from 'react';

const TodoForm = ({newItem, addTodo, changeHandler}) => {

    return (
        <form onSubmit = {addTodo}>
            <input type = 'text' value = {newItem} onChange = {changeHandler} />
            <button type = 'submit'>Add Task</button>
        </form>
    )
}

export default TodoForm;