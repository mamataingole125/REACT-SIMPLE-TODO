import React from 'react'
import TodoItem from './TodoItem'
import styles from "./Todo.module.css"

const TodoList = ({todos}) => {
  return (
    <div>
       {
           todos.map((todo)=>(
               
            <TodoItem todo={todo.value} id={todo.id} />
           ))
       }
        
    </div>
  )
}

export default TodoList