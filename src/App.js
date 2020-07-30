import React from 'react';
import './App.css';
import AddTodo from './components/AddTodo';
import VisibleTodoList from './components/VisibleTodoList';
import Filters from './components/filters';

function App() {
  return (
    <div className="App">
      <AddTodo></AddTodo>
      <VisibleTodoList></VisibleTodoList>
      <Filters></Filters>
    </div>
  );
}

export default App;
