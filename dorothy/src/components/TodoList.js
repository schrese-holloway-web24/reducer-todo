//renders a list of Todo's from Todo.js
import React from 'react';

//components
import Todo from './Todo';

const TodoList = ({tasks, toggler, clear}) => {

    return(
        <div>
                <h3>This is in the TodoList file</h3>
                {tasks.map(task => (
                    <Todo key = {task.id} {...task} toggler = {toggler} />
                ))}
                {/* <button onClick = {clear}>Clear Completed</button> */}
        </div>
    )
}

export default TodoList;