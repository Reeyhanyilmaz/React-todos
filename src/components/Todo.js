import {useState} from 'react'
import Input from './Input';
import List from './List';

function Todo() {
 
    const [todo, setTodo] = useState([
        {
        value: "React çalış"
      },
      {
        value: "Su iç"
      },
      {
        value: "Yürüyüş yap"
      },
      ]);

      return (
        <section className='todoapp'>
        <header className="header">
          <h1>todos</h1>
          </header>

          <Input todo={todo} setTodo={setTodo}/>
          <List todo={todo} removeTodo={setTodo} updateTodo={setTodo}/>
        </section>
      );
}

export default Todo;