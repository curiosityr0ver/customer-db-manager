import React from 'react'

export default function AddCustomer(props) {


    const onClick = () => {
        props.addCustomer()
    }
    const onDel = () => {
        props.delCustomer()
    }
    return (
        <div>
            <button className='btn btn-solid' onClick={onClick}>Add</button>
            <button className='btn btn-solid' onClick={onDel}>Del</button>
        </div >
    )
}
