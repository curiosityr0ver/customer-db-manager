/* eslint-disable eqeqeq */
import { React, useEffect } from 'react'

export default function Banner({ type, account }) {

    useEffect(() => {
    }, [account])

    if (type == "Current") {
        if (account == "Current") {
            return (
                <img className='banner selected' src={require('./Screenshot 2023-05-26 194118.png')} alt='Current Account' />
            )
        } else {
            return (
                <img className='banner notselected' src={require('./Screenshot 2023-05-26 194118.png')} alt='Current Account' />
            )
        }

    } else {
        if (account == "Savings") {
            return (
                <img className='banner selected' src={require('./Screenshot 2023-05-26 194131.png')} alt='Savings Account' />
            )
        } else {
            return (
                <img className='banner notselected' src={require('./Screenshot 2023-05-26 194131.png')} alt='Savings Account' />
            )
        }

    }

}
