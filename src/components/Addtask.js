import React, { useState } from 'react'
import './Todo.css'

function Addtask({addTask}) {
  const [value,setValue] = useState("")
  const validation = (e)=>{
    e.preventDefault()
    if(value.trim()!==''){
      addTask(value)
      setValue("")
      
    }else{
      alert('please enter a value')
    }
  }
  
  return (
    <>
      <div className='input-container'>
        <form onSubmit={validation}>
        <input type="text" className='input' placeholder='Add' value={value}
        onChange={(e)=>{
          setValue(e.target.value);
        }}/>
        <button type='submit' className='add-btn'>ADD</button>
        </form>
        
      </div>
    </>
  )
}

export default Addtask 