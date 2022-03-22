import { useState, useEffect} from 'react';

function Input({addTodo, todo}) {
    const [input, setInput] = useState({id: 3, value: "", isCompleted: false});

    const [itemId, setItemId] = useState(3);

    //giris yapıldıktan sonra input'u sıfırlayacak.
    useEffect(() => {
      setInput({id: 3, value: "", isCompleted: false});
    },[todo]);

    const onChangeInput = (e)=> {
        setInput({...input, id: itemId, value: e.target.value, isCompleted: false})        
    };

    //bu func. giris yapıldıgında sayfayı tekrar yüklemesini engeller.
    const onSubmit = (e) => {
      e.preventDefault();

      if(input.value === ""){
        return false;
      }

      setItemId(itemId+1);
      addTodo([...todo, input]); 
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