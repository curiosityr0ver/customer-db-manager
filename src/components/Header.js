import React from 'react'
import Button from './Button'

export default function Header({ title, showAddTask, onToggleAdd }) {
    const onClick = () => {
        onToggleAdd()
    }

    return (
        <div className='header'>
            <h1>{title}</h1>
            <Button color={showAddTask ? 'red' : 'green'} text={showAddTask ? 'x' : 'Add'} onClick={onClick} />
        </div>
    )
}



Header.defaultProps = {
    title: "Task Tracker"
}