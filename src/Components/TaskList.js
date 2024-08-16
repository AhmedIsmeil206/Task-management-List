import React, { Component } from 'react';
import Taskinput from './Taskinput';
import Taskitem from './Taskitem';
class TaskList extends Component {
  state = {
    tasks: []
  };

  addTask = (taskName) => {
    const newTask = { name: taskName, completed: false };
    this.setState({ tasks: [...this.state.tasks, newTask] });
  };

  markCompleted = (index) => {
    const tasks = [...this.state.tasks];
    tasks[index].completed = !tasks[index].completed;
    this.setState({ tasks });
  };

  deleteTask = (index) => {
    const tasks = [...this.state.tasks];
    tasks.splice(index, 1);
    this.setState({ tasks });
  };
  

  render() {
    return (
      <div>
        <Taskinput addTask={this.addTask} />
        <div>
          {this.state.tasks.map((task, index) => (
            <Taskitem
              key={index}
              index={index}
              task={task}
              markCompleted={this.markCompleted}
              deleteTask={this.deleteTask}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default TaskList;
