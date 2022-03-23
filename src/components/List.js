import { useState, useEffect } from 'react'

function List({todo, removeTodo, updateTodo,setTodo}) {

  //alttaki all , active, completed secenekleri icin filtreleme 
  const [filterType, setFilterType] = useState(0);
  const[filteredTodo, setFilteredTodo] = useState(todo);

  
  useEffect(() => {
    if(filterType===1){
      setFilteredTodo(todo.filter((item => item.isCompleted === false)));
    } else if (filterType === 2){
      setFilteredTodo(todo.filter((item => item.isCompleted)));
    } else {
      setFilteredTodo(todo);
    }   
    // console.log(todo)
  }, [filterType, todo]);


  const removeItem = (itemId) => removeTodo(todo.filter((item) => item.id !== itemId)) ;

  const clearCompleted = () => removeTodo(todo.filter((item) => !item.isCompleted));

  //listelenen todo'ları checked yapmak icin
  const checkboxChange =(itemIndex) => {
    updateTodo(todo.map((item, index) => {
      if(itemIndex === index){
        item.isCompleted = !item.isCompleted
      //tıklayınca checked yapar, tekrar tıklayınca checked kaldırır.
      }    
      return item
        }     
    ));
  }

  //tüm todo'ları checked yaptıgımız checkbox icin
  const allTodoCompleted = () => {
    if(todo.every((item) => item.isCompleted)){
      updateTodo(todo.map((item) => {
        return {...item, isCompleted: false}
      }));
    } else {
      updateTodo(todo.map((item) => {
        if( item.isCompleted !== true){
          return {...item, isCompleted: true}
        }
        return {...item}
      }));
    }
  }

  //clear completed butonunu completed yoksa hidden yapmak icin;
  let todoCompleted= 0;
  for (let i=0; i<todo.length; i++){
    if(todo[i].isCompleted){
      todoCompleted++
    }
  };

  return (
    <>
    <section className='main'>    
      <input onChange={() => allTodoCompleted()} id="toggle-all" className="toggle-all" 
      type="checkbox" />

      <label htmlFor="toggle-all" className={todo.length === 0 ? "hidden" : "show"}>Mark all as complete</label>

    <ul className='todo-list'>
    {

      //todo map'lemis olsak ekranda todo listelenir. filteredTodo map'lenince all, active, completed hangi butona basıyorsak sadece onu gösterir.
      filteredTodo.map((todos, index) => (
      <li key={index} className={todos.isCompleted ? "completed" : ""}>
        <div className='view'>

          <input type="checkbox" className='toggle' checked={todos.isCompleted} onChange={() => checkboxChange(index)} />

          <label>{todos.value}</label>     

          <button onClick={() => removeItem(todos.id)} className='destroy'></button>
       </div>
      </li>            
      ))
    }  
    </ul>
    </section>

    <footer className={todo.length === 0 ? "hidden" : "footer"}>
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

    <button onClick={clearCompleted} className={todoCompleted===0 ? "hidden" : "clear-completed"}> Clear Completed</button>    
    </footer>
  </>  
  )
}

export default List;