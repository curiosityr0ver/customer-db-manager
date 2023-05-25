import React from 'react'

export default function AddCustomer(props) {


    const onClick = () => {
        props.addCustomer()
        alert("pressed")
    }
    return (
        <div><button className='btn btn-solid' onClick={onClick}>Add</button></div>
    )
}
