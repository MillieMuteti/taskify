import React from 'react'
import "./style.css"
import { Todo } from './model'
import SingleToDo from './SingleToDo';

interface Props{
    toDos: Todo[];
    setToDos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const ToDoList: React.FC<Props>= ({toDos, setToDos}: Props) => {

  return (
    <div className='todos'>
        {toDos.map((todo)=> (
           <SingleToDo
           key={todo.id}
           todo={todo}
           toDos={toDos}
           setToDos={setToDos}
           
           />
        ))}
      
    </div>
  )
}

export default ToDoList
