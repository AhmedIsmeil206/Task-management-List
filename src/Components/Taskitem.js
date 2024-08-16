import React from 'react';

const Taskitem = ({ task, index, markCompleted, deleteTask }) => {
  return (
    <div>
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
