import React from 'react'

const Tasks = ({tasks, deleteTask}) => {
    const taskList = tasks.map(task => {
        return (
            <div className="task" key={task.id}>
                <div>{task.content}</div>
                <div>{task.done.toString()}</div>
                <div>
                    <button onClick={() => {deleteTask(task.id)}}>Delete</button>
                </div>
            </div>
        )
    })
    return(
        <div className="task-list">
            {taskList}
        </div>
    )
}
export default Tasks;