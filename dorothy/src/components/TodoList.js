//renders a list of Todo's from Todo.js
import React from 'react';

//components
import Todo from './Todo';

const TodoList = ({tasks}) => {

    return(
        <div>
                <h3>This is in the TodoList file</h3>
                {tasks.map(task => (
                    <Todo key = {task.id} {...task} />
                ))}
        </div>
    )
}

export default TodoList;