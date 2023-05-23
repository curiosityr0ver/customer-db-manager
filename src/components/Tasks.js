import React, { useState } from 'react'
import Task from './Task'


export default function Tasks({ tasks, setTasks }) {

    const deleteTask = (first) => {
        tasks = tasks.filter((task) => task.first !== first)
        setTasks(tasks)
    }

    const changeGender = (first) => {
        const newtasks = []
        for (let i = 0; i < tasks.length; i++) {
            if (tasks[i].first === first) {
                tasks[i].gender = tasks[i].gender === "male" ? "female" : "male"
            }
            newtasks[i] = tasks[i]
        }

        setTasks(newtasks)
    }



    return (
        <div className='tasks'>
            {tasks.map((task) => (
                <Task key={task.first} task={task} deleteTask={deleteTask} toggleTask={changeGender} />
            ))}
        </div>
    )
}
