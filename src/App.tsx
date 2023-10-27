import React, { useState } from 'react';
import './App.css';
import InputField from './components/InputField';
import { Todo } from './components/model';
import ToDoList from './components/ToDoList';
import { DragDropContext, Draggable, DropResult, Droppable } from 'react-beautiful-dnd';
import { act } from '@testing-library/react';

const App: React.FC = () =>{
const [toDo, setToDo] = useState<string> ("");
const [toDos, setToDos] = useState<Todo[]> ([]);

const [completedToDos, setcompletedToDos] = useState<Todo[]>([]);

const handleAdd = (e: React.FormEvent) => {
  e.preventDefault()
  if(toDo) {
    setToDos([...toDos, { id:Date.now(), toDo, isDone:false }])
    setToDo("");
  }
};

const onDragEnd = (results:DropResult) => {
  const { source, destination } = results;
  console.log(results)
  if(!destination) return;
  if(destination.droppableId === source.droppableId && 
    destination.index === source.index) 
    return;

    let add,
        active = toDos,
        complete= completedToDos

        if (source.droppableId === 'ToDosList') {
          add = active[source.index];
          active.splice(source.index, 1)
        }
        else {
          add = active[source.index];
          complete.splice(source.index, 1)
        }

        if (destination.droppableId === 'ToDosList') {
          active.splice(destination.index, 0, add)
        }
        else {
          complete.splice(destination.index, 0, add)
        }
        setToDos(active)
        setcompletedToDos(complete)


}

  return (
    < DragDropContext onDragEnd={onDragEnd}>
      <div className="App">
        <span className='header__text'>Taskify</span>
        <InputField toDo = {toDo} setToDo = {setToDo} handleAdd = {handleAdd}
        />
        <ToDoList
        toDos={toDos}
        setToDos={setToDos}
        completedToDos={completedToDos}
        setCompletedToDos={setcompletedToDos}
          />     

        </div>
    </DragDropContext>
  );
}

export default App;
