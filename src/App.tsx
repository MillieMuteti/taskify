import React, { useState } from 'react';
import './App.css';
import InputField from './components/InputField';
import { Todo } from './components/model';
import ToDoList from './components/ToDoList';



const App: React.FC = () =>{
const [toDo, setToDo] = useState<string> ("");
const [toDos, setToDos] = useState<Todo[]> ([]);

const handleAdd = (e: React.FormEvent) => {
  e.preventDefault()
  if(toDo) {
    setToDos([...toDos, { id:Date.now(), toDo, isDone:false }])
    setToDo("");
  }
};


console.log(toDos);

  return (
    <div className="App">
     <span className='header__text'>Taskify</span>
     <InputField toDo = {toDo} setToDo = {setToDo} handleAdd = {handleAdd}

     />
     <ToDoList
     toDos={toDos}
     setToDos={setToDos}
      />
      {/* { toDos.map((t) => (
      <li>{t.toDo}</li>
     ))} */}

    </div>
  );
}

export default App;
