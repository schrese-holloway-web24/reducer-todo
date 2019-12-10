//renders individual list items to TodoList.js
import React from 'react';

const Todo = ({item, completed, id}) => {
    return (
        <div>
            <p>{item}</p>
        </div>
    )
}

export default Todo;