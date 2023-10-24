import React from 'react'
import "./style.css"
import { Todo } from './model'

interface Props{
    toDos: Todo[];
    setToDos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const ToDoList: React.FC<Props>= ({toDos, setToDos}: Props) => {

  return (
    <div className='todos'>
        {toDos.map((todo)=> (
            <li>{todo.toDo}</li>
        ))}
      
    </div>
  )
}

export default ToDoList
