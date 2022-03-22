import { useState } from 'react'

function List({todo}) {

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