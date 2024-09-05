import React, { useState } from 'react'
import '../App.css'

const Taskinput = ({addTask}) => {

    const [task ,setTask] = useState(" ")
    const handleSubmit = (e)=>{
        e.preventDefault();
        if(task.trim()) {
            addTask(task)
            setTask(' ')
        }
    }
  return (
    <div className='submit'>
      <form onSubmit={handleSubmit}>
        <input type="text" value={task} onChange={(e) => setTask(e.target.value)} placeholder='Enter The New Task'/>
        <button type='submit'>Add Task</button>
      </form>
    </div>
  )
}

export default Taskinput
