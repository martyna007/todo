// this is the UI/functional/stateless component

import React from 'react'

const Tasks = ({tasks, deleteTask}) => {
    const taskList = tasks.length ? tasks.map(task => {
        return (
            <div  onClick={() => {deleteTask(task.id)}} className="task collection-item" key={task.id}>
                <div>
                    <span>{task.content}</span>
                </div>
            </div>
        )
    }) : (
        <p className="center">You have no todo's left.</p>
    )
    return(
        <div className="task-list collection">
            {taskList}
        </div>
    )
}
export default Tasks