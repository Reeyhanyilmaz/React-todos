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
        <div className="App">
          <h2>todos</h2>
          <Input todo={todo} setTodo={setTodo}/>
          <List todo={todo} />
        </div>
      );
}

export default Todo;