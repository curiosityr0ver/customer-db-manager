import React, { useState } from 'react'

export default function AddTask({ onAdd }) {
    const [first, setFirst] = useState("")
    const [last, setLast] = useState("")
    const [gender, setGender] = useState("male")

    const onSubmit = (e) => {
        e.preventDefault()
        onAdd({ first, last, gender })
        setFirst("")
        setLast("")
        setGender("male")
    }

    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className="form-control">
                <label>First Name</label>
                <input type="text" placeholder='First Name' value={first} onChange={(e) => { setFirst(e.target.value) }} />
            </div>
            <div className="form-control">
                <label>Last Name</label>
                <input type="text" placeholder='Last Name' value={last} onChange={(e) => { setLast(e.target.value) }} />
            </div>
            <div className="form-control">
                <label>Gender</label>
                <input type="checkbox" checked={gender === "male"} name='Gender' value={gender} onChange={(e) => { setGender(gender === "male" ? "female" : "male") }} />
            </div>

            <input type="submit" className='btn btn-block' />
        </form>
    )
}

