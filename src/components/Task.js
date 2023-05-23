import React from 'react'
export default function Task({ task, deleteTask, toggleTask }) {

    // toggleTask("Pleuni")

    return (
        <div onDoubleClick={() => toggleTask(task.first)} className={`task ${task.gender}`}>
            <h3>
                {task.first}
                <i className="fa-solid fa-trash" onClick={() => { deleteTask(task.first) }} color={"red"} />
            </h3>
            <h4>{task.last}
                <h5>{task.gender}</h5>
            </h4>


        </div>
    )
}


