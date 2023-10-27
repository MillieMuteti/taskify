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

const ToDoList: React.FC<Props>= ({
    toDos, 
    setToDos, 
    completedToDos, 
    setCompletedToDos,
}) => {
  return (    
        <div className="container">
            < Droppable droppableId='ToDosList'>
                {
                    (provided, snapshot)=> (
                        <div 
                        className={`todos ${snapshot.isDraggingOver? 'drag-active' : ''}`}
                        ref={provided.innerRef} 
                        {...provided.droppableProps}>
                    
                        <span className="todos__heading">
                            Active Tasks
                        </span>
                        {toDos.map((todo, index)=> (
                            <SingleToDo
                            index ={index}
                            key={todo.id}
                            todo={todo}
                            toDos={toDos}
                            setToDos={setToDos}                            
                            />
                        ))}  
                        {provided.placeholder}
                    </div>
                    )}        

            </Droppable>
            < Droppable droppableId='ToDosRemove'>
                {
                    (provided, snapshot)=> (
                        <div 
                        className={`todos remove ${snapshot.isDraggingOver? 'drag-complete' : ''}`}
                        ref={provided.innerRef} 
                        {...provided.droppableProps}>
                        <span className="todos__heading">
                                Completed Tasks
                            </span>
                            { completedToDos.map((todo, index)=> (
                                <SingleToDo
                                index={index}
                                key={todo.id}
                                todo={todo}
                                toDos={completedToDos}
                                setToDos={setCompletedToDos}                                
                                />
                            ))}   
                            {provided.placeholder}     
                            </div>
                            )} 
            </Droppable>     
           
        </div>    
    
  );
};

export default ToDoList


