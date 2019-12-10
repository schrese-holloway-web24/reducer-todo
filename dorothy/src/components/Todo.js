//renders individual list items to TodoList.js
import React from 'react';

const Todo = ({item, completed, id, toggler}) => {
    return (
        <div onClick = {() => toggler(id)} style = {completed ? {color: 'green'} : {}}>
            <p>{item}</p>
        </div>
    )
}

export default Todo;