import React, { useState } from "react";
import './TodoApp.css'
import { Button } from "react-bootstrap";
import TodoListItem from "./TodoListItem";

function TodoApp() {
  const [todos,SetTodos] = useState ([])
  const [input,setInput] = useState ('')
  const handleInputChange = (event)=>{
    setInput(event.target.value)
  }
  const addNewTodo = ()=>{
    SetTodos([...todos,{label: input, completed: false}])
    setInput('')
  }
  const makeTodoDone = (index)=>{
    const temporary = [...todos]
    temporary[index].completed=true
    SetTodos(temporary)
  }
  const deleteTodo = (index)=>{
    const temp = [...todos]
    temp.splice(index,1)
    SetTodos(temp)
  }
  return (
    <div className="todoo">
      <div className="todo-container">
      <h1 className="too">Todo App</h1>
      
      <form className="input-section">
        <input type="text" onChange={handleInputChange} value = {input} placeholder="Type Here..."/>
        <Button variant="primary" onClick={addNewTodo}>Add to list</Button>{' '}
      </form>
      <div>
        {todos.map((ele,index)=>{return <TodoListItem label = {ele.label} count = {index} key={index} completed={ele.completed} makeTodoDone = {makeTodoDone} deleteTodo = {deleteTodo} />})}
      </div>
    </div>
    </div>
  );
}

export default TodoApp;
