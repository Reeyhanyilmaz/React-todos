import { useState, useEffect} from 'react';

function Input({setTodo, todo}) {
    const [input, setInput] = useState({id: 0, value: "", completed: false });

    const [itemId, setItemId] = useState(0);

    //giris yapıldıktan sonra input'u sıfırlayacak.
    useEffect(() => {
      setInput({id:0, value: "",completed: false });
    },[todo]);

    const onChangeInput = (e)=> {
        setInput({...input, id: itemId, value: e.target.value, completed: false})
        
    };

    //bu func. giris yapıldıgında sayfayı tekrar yüklemesini engeller.
    const onSubmit = (e) => {
      e.preventDefault();

      if(input.value === ""){
        return false;
      }

      setItemId(itemId+1);
      setTodo([...todo, input]); 
    }
  

  return (
    <form onSubmit={onSubmit}>
        <input 
        className='new-todo'
        placeholder='Enter to do item'
        name='value'
        value={input.value}
        onChange={onChangeInput}
        />
    </form>
  )
}

export default Input;