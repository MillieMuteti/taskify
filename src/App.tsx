import React, { useState } from 'react';
import './App.css';
import InputField from './components/InputField';
import { Todo } from './components/model';

const App: React.FC = () =>{
const [toDo, setToDo] = useState<string> ("")
const [toDos, setToDos] = useState<Todo[]>([])

const handleAdd = (e:React.FormEvent) => {
  e.preventDefault()
}


console.log(toDo);

  return (
    <div className="App">
     <span className='header__text'>Taskify</span>
     <InputField toDo={toDo}
     setToDo={setToDo}
     handleAdd={handleAdd}
     />

    </div>
  );
}

export default App;
