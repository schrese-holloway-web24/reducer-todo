//renders individual list items to TodoList.js
import React from 'react';

const Todo = ({item}) => {
    return (
        <div>
            <p>{item}</p>
        </div>
    )
}

export default Todo;