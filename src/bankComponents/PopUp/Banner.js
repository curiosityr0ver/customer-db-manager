import { React, useEffect } from 'react'

export default function Banner({ type, account }) {

    useEffect(() => {
        console.log(account);
    }, [account])

    if (type == "Current") {
        if (account == "Current") {
            return (
                <img className='selected' src={require('./Screenshot 2023-05-26 194118.png')} />
            )
        } else {
            return (
                <img className='notselected' src={require('./Screenshot 2023-05-26 194118.png')} />
            )
        }

    } else {
        if (account == "Savings") {
            return (
                <img className='selected' src={require('./Screenshot 2023-05-26 194131.png')} />
            )
        } else {
            return (
                <img className='notselected' src={require('./Screenshot 2023-05-26 194131.png')} />
            )
        }

    }

}
