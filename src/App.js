// this is the root component

import React, { Component } from 'react';
import Tasks from './Tasks';
import AddTask from './AddTask';

class App extends Component {
  state = {
    tasks: [
        { content: 'play game', id: 1 },
        { content: 'make dinner', id: 2 }
    ]
  }
  addTask = (task) => {
    task.id = Math.random();
    let tasks = [...this.state.tasks, task];
    this.setState({
        tasks: tasks
    })
  }
  deleteTask = (id) => {
    let tasks = this.state.tasks.filter(task => {
      return task.id !== id
    })
      this.setState({
          tasks: tasks
      })
  }
  render() {
      return (
          <div className="todo-app container">
            <h2 className="center teal-text">Todo React App</h2>
            <Tasks tasks={this.state.tasks} deleteTask={this.deleteTask}/>
            <AddTask addTask={this.addTask} />
          </div>
      );
  }
}

export default App;
