import { useState, useEffect} from 'react';

function Input({setTodo, todo}) {
    const [input, setInput] = useState({value: "" });

    //giris yapıldıktan sonra input'u sıfırlayacak.
    useEffect(() => {
      setInput({value: "" });
    },[todo]);

    const onChangeInput = (e)=> {
        setInput({...input, value: e.target.value })
        
    };

    //bu func. giris yapıldıgında sayfayı tekrar yüklemesini engeller.
    const onSubmit = (e) => {
      e.preventDefault();

      if(input.value === ""){
        return false;
      }
      setTodo([...todo, input]); 
    }
  

  return (
    <form onSubmit={onSubmit}>
        <input 
        className='new-todo'
        placeholder='Enter to do item'
        name='todo-list'
        value={input.value}
        onChange={onChangeInput}
        />
    </form>
  )
}

export default Input;