//renders the form 
import React from 'react';

const TodoForm = ({newItem, addTodo, changeHandler, clear}) => {

    return (
        <form onSubmit = {addTodo}>
            <input type = 'text' value = {newItem} onChange = {changeHandler} />
            <button type = 'submit'>Add Task</button>
            <button onClick = {clear}>Clear Completed</button>
        </form>
    )
}

export default TodoForm;