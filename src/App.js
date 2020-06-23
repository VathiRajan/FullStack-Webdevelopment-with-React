import React from 'react';
import TodoApp from './components/todo/TodoApp'
import logo from './logo.svg';
import './App.css';



import CounterButton  from './components/CounterComponent';
function App() {
  return (
    <div className = "App">
     {/* <CounterComp />*/}
     <TodoApp/>

    </div>
  );
}

export default App;
