import React, { useReducer } from 'react';
import './App.css';

//reducer
import {reducer, initState} from './reducers/todoReducer';

//components
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

function App() {
  const [todoState, dispatch] = useReducer(reducer, initState);

      //adds a net task to the todo list
    const addTodo = e => {
      e.preventDefault();
      dispatch({type: "ADD_TODO", payload: todoState.newItem})
    }

    //prevents default handling of the input in todoForm
    const changeHandler = e => {
      e.preventDefault();
      dispatch({type: "CHANGE_HANDLER", payload: e.target.value})
    }

    const toggler = (id) => 
        dispatch({type: "TOGGLER", payload: id})

  console.log(todoState);
  return (
    <div className="App">
      <h1>Hello There</h1>
      <TodoForm  newItem = {todoState.newItem} addTodo = {addTodo} changeHandler = {changeHandler} />
      <TodoList tasks = {todoState.tasks} toggler = {toggler} />
    </div>
  );
}

export default App;
