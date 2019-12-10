import React, { useReducer } from 'react';
import './App.css';

//reducer
import {reducer, initState} from './reducers/todoReducer';

//components
import TodoList from './components/TodoList';

function App() {
  const [todoState] = useReducer(reducer, initState);

  console.log(todoState);
  return (
    <div className="App">
      <h1>Hello There</h1>
      <TodoList tasks = {todoState.tasks} />
    </div>
  );
}

export default App;
