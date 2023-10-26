import React, { useState, useRef, useEffect} from 'react'
import { Todo } from './model';
import {AiFillDelete, AiFillEdit } from 'react-icons/ai';
import { MdOutlineDone } from 'react-icons/md';
import "./style.css"

type Props ={
    todo:Todo,
    toDos: Todo[];
    setToDos: React.Dispatch<React.SetStateAction<Todo[]>>;
    index:number;
}

const SingleToDo = ({toDos, setToDos, todo, index}: Props) => {

    const[edit, setEdit] = useState<boolean>(false);
    const [editToDo, setEditToDo] =useState<string>(todo.toDo)

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
    const handleEdit =(e:React.FormEvent, id:number) => {
        e.preventDefault();
        setToDos(toDos.map((todo) => (
            todo.id === id ? { ...todo, toDo: editToDo } : todo
        )));
        setEdit(false);

    }
    const inputRef = useRef<HTMLInputElement>(null)

    useEffect(() => {
    inputRef.current?.focus();
    
    }, [edit])
    
    

 

  return (
    <form className='todos__single' onSubmit={(e)=> handleEdit(e, todo.id)}>
    { edit ? (
        <input
        value={editToDo}
        ref={inputRef}
        className='todos__single--text'
        onChange={(e) => setEditToDo(e.target.value)} />
    ) : (
        todo.isDone? (
            <s className='todos__single--text'>{todo.toDo} </s>
        ): (
            <span className='todos__single--text'>{todo.toDo} </span>  
        )
    )}
    
        
        
        <div>
        <span className='icon'
        onClick={()=>{
            if(!edit && !todo.isDone){
                setEdit(!edit)
            }
            
        }}
        >
                <AiFillEdit />
            </span>
            <span className='icon'>
            <AiFillDelete
            onClick={()=> handleDelete(todo.id)}
            />
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
