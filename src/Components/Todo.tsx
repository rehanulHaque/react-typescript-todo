// import React from 'react'

interface TodoProps {
    title: string;
    id: number;
    onDeleteTodo: (id: number) => void
}

const Todo = ({title, id, onDeleteTodo}: TodoProps) => {
    
  return (
    <div className="todo">
      <h4>{title}</h4>
      <button onClick={() => onDeleteTodo(id)}>Delete</button>
    </div>
  )
}

export default Todo
