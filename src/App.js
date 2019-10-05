import React, { Component } from 'react';
import Tasks from './Tasks';
import AddTask from './AddTask';

class App extends Component {
  state = {
    tasks: [
        { content: 'First task!', id: 1, done: false }
    ]
  }
  addTask = (task) => {
    task.id = Math.random();
    task.done = false;
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
          <div className="App">
            <h1>ToDo React App</h1>
            <Tasks tasks={this.state.tasks} deleteTask={this.deleteTask}/>
            <AddTask addTask={this.addTask} />
          </div>
      );
  }
}

export default App;
