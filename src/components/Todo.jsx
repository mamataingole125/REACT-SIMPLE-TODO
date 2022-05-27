import React, { useState } from 'react'
import TodoList from './TodoList'
import { v4 as uuidv4 } from 'uuid'
import styles from "./Todo.module.css"

const Todo = () => {
    const [value,setValue]=useState("")
    const [todos,setTodos]=useState([])

    console.log(value)
    console.log(todos)
const pushTodo=(newTodo)=>{
    console.log(newTodo)
    setTodos([...todos,{
        id:uuidv4(),
        value:newTodo,
        isCompleted:false
    }])
    setValue("")
}

  return (
    <div>
         <TodoList todos={todos}/>
        <input type="text" className={styles.input}
        value={value}
        placeholder='Write Something' onChange={(e)=>setValue(e.target.value)
         } />

        <button className={styles.inputbtn}
       onClick={()=>pushTodo(value)
      } >+</button>
    

    </div>
  )
}

export default Todo