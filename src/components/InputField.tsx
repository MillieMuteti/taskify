import React, { useRef } from 'react'
import "./style.css";

interface Props {
    toDo:string;
    setToDo: React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (e:React.FormEvent) => void
}

const InputField: React.FC<Props> = ({toDo, setToDo, handleAdd}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <form
     className='input'
      onSubmit={(e) => {
        handleAdd(e);
        inputRef.current?.blur();
      }}
      
      >
        <input
        value={toDo}
        onChange={(e) => setToDo(e.target.value)} 
        type="text" 
        name="task" 
        placeholder="Enter Task" 
        className='input__box'/>
        <button type="submit" className='input__submit'>Go</button>
    </form>
  )
}

export default InputField
