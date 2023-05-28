import React from 'react'

export default function IconButton({ type }) {

    if (type == "male") {
        return (
            <div>
                <img className='icon' src={require('./icons8-male-100.png')} />
            </div>
        )
    } else if (type == "female") {
        return (
            <div>
                <img className='icon' src={require('./icons8-female-100.png')} />
            </div>
        )
    } else {
        return (
            <div>
                <img className='icon' src={require('./icons8-lgbt-100.png')} />
            </div>
        )
    }

}
