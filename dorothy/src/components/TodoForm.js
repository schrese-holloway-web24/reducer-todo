import React, {useReducer} from 'react';

//reducer
import {reducer, initState} from '../reducers/todoReducer';
// import {} from '../reducers/todoReducer';


const TodoForm = () => {
    const [state, dispatch] = useReducer(reducer, initState);

    const addTodo = e => {
        e.preventDefault();
        dispatch({type: "ADD_TODO", payload: state.item})
    }

    return (
        <form onSubmit = {addTodo}>
            <input type = 'text'></input>
            <button>Add Task</button>
        </form>
    )
}

export default TodoForm;