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
    const handleDone= (id:number)=>{
        setToDos(toDos.map((todo)=>(
            todo.id === id ? {...todo , isDone : !todo.isDone} : todo
        )))
    }

    const handleDelete =(id:number)=>{
        setToDos(toDos.filter((todo)=>
        todo.id !== id 
        
        ))
    }
  return (
    <form className='todos__single'>
        {todo.isDone? (
            <s className='todos__single--text'>{todo.toDo} </s>
        ): (
            <span className='todos__single--text'>{todo.toDo} </span>  
        )}
        
        <div>
            <span className='icon'>
            <AiFillDelete
            onClick={()=> handleDelete(todo.id)}
            />
            </span>
            <span className='icon'>
                <AiFillEdit />
            </span>
            <span className='icon'>
                <MdOutlineDone
                onClick={()=> handleDone(todo.id)}
                 />
            </span>
        </div>

    </form>
  )
}

export default SingleToDo
