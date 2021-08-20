import React,{useState} from 'react';
import './App.css';
// importing Components
import Form from "./components/Form";
import TodoList from './components/ToDoList';
function App() {
  const [inputText, setInputText] = useState("");
  const [todos,setTodos] = useState([]);
  return (
    <div className="App">
      <header>
      <h1>Kashif's Todo List</h1>
      </header>
      <Form inputText = {inputText} 
      todos = {todos} 
      setTodos ={{setTodos}} 
      setInputText = {setInputText} />
      <TodoList/>
    </div>
  );
}

export default App;
