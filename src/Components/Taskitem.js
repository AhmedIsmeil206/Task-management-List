import React from 'react';
import "../App.css"
const Taskitem = ({ task, index, markCompleted, deleteTask }) => {
  return (
    <div className='Task'>
      <input 
        type="checkbox" 
        checked={task.completed} 
        onChange={() => markCompleted(index)} 
      />
      <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
        {task.name}
      </span>
      <button onClick={() => deleteTask(index)}>Delete</button>
    </div>
  );
};

export default Taskitem;
