//reducer to be used in: 
export const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_TODO":
            return {
                ...state, 
                tasks: [
                    ...state.tasks,
                    {
                        item: action.payload,
                        completed: false,
                        id: Date.now()
                    }
                ],
                newItem: ''
            }
        case "CHANGE_HANDLER": 
            return {
                ...state, 
                newItem: action.payload
            }
        case "TOGGLER": 
            return {
                ...state,
                tasks: state.tasks.map(task => {
                    if(task.id === action.payload) {
                        return {
                            ...task,
                            completed: !task.completed
                        }
                    }
                    return task
                })
            }
        case "CLEAR": 
            return {
                ...state, 
                tasks: state.tasks.filter(task => {
                    return task.completed === false 
                })
            }
        default: 
            return state;
    }
}


//initial todo list
export const initState = {
    tasks: [
        {
            item: 'Learn about reducers',
            completed: false,
            id: 3892987589
        },
        {
            item: 'Get through this lesson this time', 
            completed: false,
            id: 3892987590
        },
        {
            item: 'Try to hit stretch as well', 
            completed: false,
            id: 3892987591
        }
    ],
    newItem: ''
}