import React  from 'react'
import "./style.css"
import { Todo } from './model'
import SingleToDo from './SingleToDo';
import { Droppable } from 'react-beautiful-dnd';

interface Props{
    toDos: Todo[];
    setToDos: React.Dispatch<React.SetStateAction<Todo[]>>;
    completedToDos:Todo[];
    setCompletedToDos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const ToDoList: React.FC<Props>= ({toDos, setToDos}: Props) => {

  


  return (
    
        <div className="container">
            <Droppable droppableId='ToDosList'>
                {
                    (provided)=> (
                        <div className="todos">
                        <span className="todos__heading">
                            Active Tasks
                        </span>
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
           

            </Droppable>
            
            <div className="todos remove">
            <span className="todos__heading">
                    Completed Tasks
                </span>
                {toDos.map((todo)=> (
                    <SingleToDo
                    key={todo.id}
                    todo={todo}
                    toDos={toDos}
                    setToDos={setToDos}
                    
                    />
                ))}

                </div>
        </div>
      
    
  )
}

export default ToDoList


