import {useState} from 'react'
import Input from './Input';
import List from './List';

function Todo() {
 
    const [todo, setTodo] = useState([
        {
        id: 0, value: "React çalış", completed: false
      },
      {
        id: 1, value: "Su iç", completed: false
      },
      {
      id: 2, value: "Yürüyüş yap",  completed: false
      },
      ]);

      return (
        <section className='todoapp'>
        <header className="header">
          <h1>todos</h1>
          </header>

          <Input todo={todo} addTodo={setTodo}/>
          <List todo={todo} removeTodo={setTodo} updateTodo={setTodo}/>
        </section>
      );
}

export default Todo;