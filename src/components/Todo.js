import {useEffect, useState} from 'react'
import Input from './Input';
import List from './List';

function Todo() {
 
    const [todo, setTodo] = useState([]);      
      
    //sayfa yenilense dahi local storage'a verileri kaydetmek icin.
    //todoapp key adımız. todo'da listelenecek itemelrin value deferi.
    useEffect(() => {      
      const localStr = JSON.parse(localStorage.getItem("todoapp"));      
      if(localStr) {
        setTodo(localStr);
      }
    },[]);

    useEffect(() => {
      localStorage.setItem("todoapp" , JSON.stringify(todo))
    },[todo])

    //tarih ögesi
    let date = new Date();
    let now = date.getDate() + "/" + (date.getMonth()+1) + "/"+ date.getFullYear();

      return (
        <section className='todoapp'>
        <header className="header">
          <h1>todos</h1>
          </header>
          
          <div className='date'>{now}</div>

          <Input todo={todo} addTodo={setTodo}/>
          <List todo={todo} removeTodo={setTodo} updateTodo={setTodo}/>
        </section>
      );
}

export default Todo;