//reducer to be used in: 
export const reducer = (state, action) => {
    switch (action.type) {
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
    ]
}