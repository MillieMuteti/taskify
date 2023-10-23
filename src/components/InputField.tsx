import React from 'react'
import "./style.css";

interface Props {
    toDo:string;
    setToDo: React.Dispatch<React.SetStateAction<string>>;
}

const InputField: React.FC<Props> = ({toDo, setToDo}) => {
  return (
    <form className='input'>
        <input type="text" name="task" placeholder="Enter Task" className='input__box'/>
        <button type="submit" className='input__submit'>Go</button>
    </form>
  )
}

export default InputField
