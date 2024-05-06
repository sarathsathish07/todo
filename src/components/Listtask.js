import React from 'react'
import './Todo.css'
import { FaTrash } from "react-icons/fa";

function Listtask({task,index,removeTask}) {
  return (
    <>
      <div className='list-task'>
        {task.title}
        <button onClick={()=>{removeTask(index)}} className='delete-btn'><FaTrash /></button>
      </div>
    </>
  )
}

export default Listtask