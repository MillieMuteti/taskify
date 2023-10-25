import React from 'react'
import { Todo } from './model';
import {AiFillDelete, AiFillEdit } from 'react-icons/ai';
import { MdOutlineDone } from 'react-icons/md';
import "./style.css"

type Props ={
    todo:Todo,
    toDos: Todo[];
    setToDos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const SingleToDo = ({toDos, setToDos, todo}: Props) => {
  return (
    <form className='todos__single'>
        <span className='todos__single--text'>
            {todo.toDo}

        </span>
        <div>
            <span className='icon'>
            <AiFillDelete />
            </span>
            <span className='icon'>
                <AiFillEdit />
            </span>
            <span className='icon'>
                <MdOutlineDone />
            </span>
        </div>

    </form>
  )
}

export default SingleToDo
