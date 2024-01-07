// import React from 'react'

import { useState } from "react"
import NewTodo from "./Components/newTodo"
import Todo from "./Components/Todo";

interface Todos {
  title: string;
  id: number;
}
const App = () => {
  const [todos, setTodos] = useState<Todos[]>([])

  const handelAddTodo = (title: string) => {
    setTodos(prevTodo =>{
      const newTodo = {
        title: title,
        id: Math.random()
      }
      return [...prevTodo, newTodo]
    })
  }
  const deleteTodo = (id: number) => {
    setTodos(prevTodo => prevTodo.filter(todo => todo.id !== id))
}
  return (
    <main className="App">
      <NewTodo onAddTodo={handelAddTodo}/>
      {todos?.map((todo) => (
        <Todo key={todo.id} title={todo.title} id={todo.id} onDeleteTodo={deleteTodo}/>
      ))}
    </main>
  )
}

export default App
