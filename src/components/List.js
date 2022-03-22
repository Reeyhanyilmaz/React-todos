import { useState, useEffect } from 'react'

function List({todo, removeTodo, updateTodo}) {

  //alttaki all , active, completed secenekleri icin filtreleme 
  const [filterType, setFilterType] = useState(0);
  const[filteredTodo, setFilteredTodo] = useState(todo);

  
  useEffect(() => {
    if(filterType===1){
      setFilteredTodo(todo.filter((item => item.completed === false)));
    } else if (filterType === 2){
      setFilteredTodo(todo.filter((item => item.completed)));
    } else {
      setFilteredTodo(todo);
    }
  }, [filterType, todo]);


  const remove = (itemId) => removeTodo(todo.filter((item) => item.id !== itemId)) ;

  const clearCompleted = () => removeTodo(todo.filter((item) => !item.completed));

  const checkboxChange =(itemIndex) => {
    updateTodo(todo.map((item, index) => {
      if(itemIndex === index){
        return {...item, completed: !item.completed }
        }else {
          return {...item}
        }     
    }));
  }

  const allTodoCompleted = () => {

    if(todo.every((item) => item.completed)){
      updateTodo(todo.map((item) => {
        return {...item, completed: false}
      }));
    } else {
      updateTodo(todo.map((item) => {
        if( item.completed !== true){
          return {...item, completed: true}
        }
        return {...item}
      }));
    }
  }

  return (
    <>
    <section className='main'>    
    <input onChange={() => allTodoCompleted()} id="toggle-all" className="toggle-all" 
    type="checkbox" />

    <label htmlFor="toggle-all">Mark all as complete</label>

    <ul className='todo-list'>
    {
      //todo map'lemis olsak ekranda todo listelenir. filteredTodo map'lenince all, active, completed hangi butona basıyorsak sadece onu gösterir.

      filteredTodo.map((todos, index) => (
      <li key={todo.id} className={todo.completed ? "completed" : ""}>
        <div className='view'>

        <input defaultChecked={todo.completed} type="checkbox" className='toggle' checked={todo.completed} onChange={() => checkboxChange(index)} />

        <label>{todos.value}</label>     
      <button onClick={() => remove(todo.id)} className='destroy'></button>
      </div>
      </li>            
      ))
    }  
    </ul>
    </section>
    
    <footer className='footer'>
      <span className='todo-count'>
        <strong>{filteredTodo.length}</strong>
      items left
      </span>
    
  
    {/* burada filtrelemelere sayı atadık. Varsayılan 0 ve all olarak hepsini gösterir.  */}

    <ul className='filters'>
      <li>
        <button className={filterType === 0 ? "selected" : ""} onClick={() => setFilterType(0)}>All</button>
      </li>

      <li>
        <button className={filterType === 1 ? "selected" : ""} onClick={() => setFilterType(1)}>Active</button>
      </li>

      <li>
        <button className={filterType === 2 ? "selected" : ""} onClick={() => setFilterType(2)}>Completed</button>
      </li>
    </ul>

    <button onClick={clearCompleted} className='clear-completed'>Clear Completed</button>

    </footer>
  </>
  )
}

export default List;