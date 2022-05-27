import React from 'react'
import { useState } from 'react'
import styles from "./Todo.module.css"

const TodoItem = ({todo}) => {

  const [iscompleted,setIscompleted]=useState(false)

  return (
    <div  className={styles.contentradio} >
       
       <label className={styles.content}
       htmlFor="">{todo} </label>
       <br />
       <input className={styles.radio}
        type="radio" 
       onChange={(e)=>{
        setIscompleted(e.target.checked)
        console.log(iscompleted)
       }}/>
       
      
      
    </div>
  )
}

export default TodoItem