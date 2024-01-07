import {FormEvent, useState} from 'react'

interface AddTodoProps {
    onAddTodo: (title: string) => void
}
const NewTodo = ({onAddTodo}: AddTodoProps) => {
    const [title, setTitle] = useState<string>('')
    const onSubmitEvent = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        onAddTodo(title)
        setTitle('')
    }
  return (
    <form onSubmit={onSubmitEvent}>
      <div>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)}/>
        <button>Add</button>
      </div>
    </form>
  )
}

export default NewTodo
