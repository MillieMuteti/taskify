import React from 'react'
import { Todo } from './model';

type Props ={
    todo:Todo,
    toDos: Todo[];
    setToDos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const SingleToDo = ({toDos, setToDos, todo}: Props) => {
  return (
    <div>
      
    </div>
  )
}

export default SingleToDo
