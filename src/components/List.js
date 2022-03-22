import { useState } from 'react'

function List({todo}) {

  return (
    <>
    <section className='main'>    
    <ul className='todo-list'>
    {
      todo.map((todos, index) => (
      <li key={index} className="done, completed">
        <div className='view'>
        <input type="checkbox" className='toggle'/>
        <label>{todos.value}</label>     
      <button className='destroy'></button>
      </div>
      </li>            
      ))
    }  
    </ul>
    </section>
  </>
  )
}

export default List;