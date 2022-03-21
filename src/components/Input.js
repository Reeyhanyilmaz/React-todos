// import { toBeInTheDocument } from '@testing-library/jest-dom/dist/matchers';
import { useState } from 'react'


function Input({setTodo}) {
    const [input, setInput] = useState({value: "" });
    
    const onChangeInput = (e)=> {
        setInput({...input, value: e.target.value })
        
    };

   setTodo([...todo, input]); 

  return (
    <div>
        <input 
        placeholder='Enter to do item'
        name='todoText'
        value={input.value}
        onChange={onChangeInput}
        />
    </div>
  )
}

export default Input;