import {useState, useEffect} from 'react'
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
      ])
    
      useEffect(() => {

      },[todo])

      return (
        <div className="App">
          <h2>todos</h2>
          <Input todo={todo} />
          <List todo={todo} setTodo={setTodo}/>
        </div>
      );
}

export default Todo;