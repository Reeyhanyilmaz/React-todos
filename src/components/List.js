import { useState } from 'react'

function List() {

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
 
    <ul>
    {
    todo.map((todos, index) => (
      
      <li key={index}>
        <label > {todos.value}</label>
      </li>
          
      ))
    }  

       </ul>

  )
}

export default List;